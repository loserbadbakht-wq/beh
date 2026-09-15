import os
import re
import sys
from curl_cffi import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

# Read URL from workflow input (env var), fallback to CLI arg
url = os.environ.get("OUO_URL") or (sys.argv[1] if len(sys.argv) > 1 else None)

if not url:
    print("Error: No URL provided. Set OUO_URL env var or pass as argument.")
    sys.exit(1)

# -------------------------------------------

def RecaptchaV3():
    from curl_cffi import requests as crequests
    ANCHOR_URL = (
        'https://www.google.com/recaptcha/api2/anchor?ar=1'
        '&k=6Lcr1ncUAAAAAH3cghg6cOTPGARa8adOf-y9zv2x'
        '&co=aHR0cHM6Ly9vdW8ucHJlc3M6NDQz'
        '&hl=en&v=pCoGBhjs9s8EhFOHJFe8cqis'
        '&size=invisible&cb=ahgyd1gkfkhe'
    )
    url_base = 'https://www.google.com/recaptcha/'
    post_data = "v={}&reason=q&c={}&k={}&co={}"
    client = crequests.Session()
    client.headers.update({
        'content-type': 'application/x-www-form-urlencoded'
    })
    matches = re.findall(r'([api2|enterprise]+)/anchor\?(.*)', ANCHOR_URL)[0]
    url_base += matches[0] + '/'
    params = matches[1]
    res = client.get(url_base + 'anchor', params=params, impersonate="chrome124")
    token = re.findall(r'"recaptcha-token" value="(.*?)"', res.text)[0]
    params = dict(pair.split('=') for pair in params.split('&'))
    post_data = post_data.format(params["v"], token, params["k"], params["co"])
    res = client.post(url_base + 'reload',
                      params=f'k={params["k"]}',
                      data=post_data,
                      impersonate="chrome124")
    answer = re.findall(r'"rresp","(.*?)"', res.text)[0]
    return answer

# -------------------------------------------

client = requests.Session()
client.headers.update({
    'authority': 'ouo.io',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
})

# -------------------------------------------
# OUO BYPASS


def ouo_bypass(url):
    tempurl = url.replace("ouo.press", "ouo.io")
    p = urlparse(tempurl)
    # Robust id extraction (ignore query string / fragment / trailing slash)
    id = p.path.rstrip('/').split('/')[-1]
    if not id:
        raise RuntimeError(f"Could not extract id from URL: {url}")

    print(f"[*] Original URL : {url}")
    print(f"[*] Normalized   : {tempurl}")
    print(f"[*] ID           : {id}")

    res = client.get(tempurl, impersonate="chrome124")
    next_url = f"{p.scheme}://{p.hostname}/go/{id}"

    for i in range(2):
        # If a redirect target is already present, we're done
        if res.headers.get('Location'):
            print(f"[+] Got redirect on iteration {i}: {res.headers.get('Location')}")
            break

        print(f"\n--- iteration {i} ---")
        print("URL         :", res.url)
        print("Status      :", res.status_code)
        print("Content-Type:", res.headers.get('content-type'))
        print("Body preview:", res.text[:800])
        print("--------------------\n")

        bs4 = BeautifulSoup(res.content, 'lxml')

        # Try top-level form first, then any nested form
        form = bs4.form or bs4.find("form")
        if form is None:
            print("[!] No <form> found — page isn't the ouo challenge page.")
            break

        inputs = form.findAll("input", {"name": re.compile(r"token$")})
        data = {inp.get('name'): inp.get('value') for inp in inputs}
        data['x-token'] = RecaptchaV3()

        h = {
            'content-type': 'application/x-www-form-urlencoded',
            'referer': res.url,
            'origin': f"{p.scheme}://{p.hostname}",
        }

        res = client.post(next_url, data=data, headers=h,
                          allow_redirects=False, impersonate="chrome124")
        next_url = f"{p.scheme}://{p.hostname}/xreallcygo/{id}"

    final = res.headers.get('Location')
    if not final:
        raise RuntimeError(
            f"Bypass failed. Last status={res.status_code}, "
            f"last url={res.url}, body preview={res.text[:300]!r}"
        )

    return {
        'original_link': url,
        'bypassed_link': final
    }

# -------------------------------------------

try:
    out = ouo_bypass(url)
    print("\n[RESULT]")
    print(out)

    # Write result for later workflow steps
    with open("output.txt", "w") as f:
        f.write(f"original_link: {out['original_link']}\n")
        f.write(f"bypassed_link: {out['bypassed_link']}\n")

except Exception as e:
    print(f"\n[ERROR] {e}")
    sys.exit(1)
