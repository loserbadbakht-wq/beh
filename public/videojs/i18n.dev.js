import { s as isObject } from "./predicate-faYxAB6Z.js";
import { a as onI18nRegistryChange, c as flattenTranslations, i as hasRegisteredLocale, n as getCanonicalLocaleKey, o as registerI18n, r as getI18nTranslations, s as DEFAULT_LOCALE, t as findLocaleKeys } from "./i18n-DyF_NfCk.js";
import { n as interpolate, r as resolveText, t as translateText } from "./translate-text-BWvoW5-r.js";

//#region ../core/dist/dev/i18n/locales/en.js
var en_default = {
	buttons: {
		play: "Play",
		pause: "Pause",
		replay: "Replay",
		mute: "Mute",
		unmute: "Unmute"
	},
	seek: {
		forward: "Seek forward {seconds} seconds",
		backward: "Seek backward {seconds} seconds"
	},
	fullscreen: {
		enter: "Enter fullscreen",
		exit: "Exit fullscreen"
	},
	captions: {
		enable: "Enable captions",
		disable: "Disable captions"
	},
	pip: {
		enter: "Enter picture-in-picture",
		exit: "Exit picture-in-picture"
	},
	live: {
		playing: "Playing live",
		seekToEdge: "Seek to live edge",
		badge: "Live"
	},
	cast: {
		start: "Start casting",
		stop: "Stop casting",
		connecting: "Connecting"
	},
	airplay: {
		start: "Start AirPlay",
		stop: "Stop AirPlay"
	},
	slider: { seek: "Seek" },
	time: {
		current: "Current time",
		duration: "Duration",
		remaining: "Remaining",
		elapsedSuffix: "{duration} elapsed",
		durationSuffix: "{duration} duration",
		remainingSuffix: "{duration} remaining",
		showElapsed: "Show elapsed time, {duration}.",
		showDuration: "Show duration, {duration}.",
		showRemaining: "Show remaining time, {duration}.",
		toggleElapsed: "Toggle between elapsed and remaining time.",
		toggleDuration: "Toggle between duration and remaining time.",
		position: "{current} of {duration}"
	},
	playback: { rate: "Playback rate {rate}" },
	volume: {
		mutedValue: "{percent}, muted",
		muted: "Muted",
		label: "Volume",
		value: "Volume {value}"
	},
	status: {
		captionsOn: "Captions on",
		captionsOff: "Captions off",
		paused: "Paused",
		playing: "Playing",
		fullscreen: "Fullscreen",
		pip: "Picture in picture",
		exitPip: "Exit picture in picture",
		seekedTo: "Seeked to {time}"
	},
	container: { label: "Media player" },
	errors: {
		aborted: "You stopped media playback before it finished.",
		network: "This media could not be loaded due to a network or server issue.",
		decode: "This media could not be played. It may be corrupted, or your browser may not support its format.",
		source: "This media could not be loaded. It may be unavailable, or your browser may not support its format.",
		encrypted: "This media could not be played because it could not be decrypted.",
		unplayable: "This media is unsupported by the player.",
		title: "Something went wrong.",
		unexpected: "An unexpected error occurred."
	},
	common: {
		empty: "",
		ok: "OK"
	},
	menu: {
		settings: "Settings",
		quality: "Quality",
		audio: "Audio",
		default: "Default",
		speed: "Speed",
		captions: "Captions",
		playbackRate: "Playback rate",
		back: "Back",
		off: "Off",
		auto: "Auto",
		autoWithLabel: "Auto ({label})",
		subtitles: "Subtitles"
	}
};

//#endregion
//#region ../core/dist/dev/core/i18n/browser-translation.js
const NAMED_PLACEHOLDER = /\{([^{}]+)\}/g;
const INDEX_PLACEHOLDER = /\{\s*(\d+)\s*\}/g;
/**
* Replaces `{seconds}` with `{0}`, `{1}`, … so the Browser Translation API sees one full
* sentence (grammar/word order preserved) while opaque numeric slots are left alone.
*/
function maskNamedPlaceholders(source) {
	const slots = [];
	return {
		masked: source.replace(NAMED_PLACEHOLDER, (_, name) => {
			slots.push(name);
			return `{${slots.length - 1}}`;
		}),
		slots
	};
}
function restoreNamedPlaceholders(translated, slots) {
	return translated.replace(INDEX_PLACEHOLDER, (match, index) => {
		const name = slots[Number(index)];
		return name !== void 0 ? `{${name}}` : match;
	});
}
async function translateProtectingPlaceholders(translator, value) {
	const { masked, slots } = maskNamedPlaceholders(value);
	if (slots.length === 0) return translator.translate(value);
	return restoreNamedPlaceholders(await translator.translate(masked), slots);
}
const cache = /* @__PURE__ */ new Map();
function isEnglishLocaleTag(tag) {
	return tag === "en" || tag.startsWith(`${"en"}-`);
}
function getBrowserTranslator() {
	if (!("Translator" in globalThis)) return void 0;
	return globalThis.Translator;
}
/** First non-English tag in the lookup chain used as the browser translation target. */
function resolveBrowserTranslationTarget(locale) {
	for (const tag of findLocaleKeys(locale)) if (!isEnglishLocaleTag(tag)) return tag;
}
/** Whether to invoke the Browser Translation API for this locale after lazy built-in loading. */
function shouldAttemptBrowserTranslation(locale, loadedLazyTags, translations) {
	if (!resolveBrowserTranslationTarget(locale)) return false;
	if (loadedLazyTags.some((tag) => !isEnglishLocaleTag(tag))) return translations !== void 0 && hasMissingEnglishTranslations(translations);
	return !findLocaleKeys(locale).some((tag) => !isEnglishLocaleTag(tag) && hasRegisteredLocale(tag));
}
function hasMissingEnglishTranslations(translations) {
	const english = flattenTranslations(en_default);
	return Object.keys(english).some((key) => translations[key] === void 0);
}
/**
* Translates English registry values via the on-device Browser Translation API when a pre-installed
* model is available. Results are cached per target language tag.
*/
async function getBrowserTranslations(locale, options) {
	const target = resolveBrowserTranslationTarget(locale);
	if (!target) return {};
	const cached = cache.get(target);
	if (cached) return cached;
	const Translator = getBrowserTranslator();
	if (!Translator) return {};
	const downloadIfNeeded = options?.downloadIfNeeded ?? false;
	const availability = await Translator.availability({
		sourceLanguage: "en",
		targetLanguage: target
	});
	if (availability === "unavailable") return {};
	if (!downloadIfNeeded && availability !== "available") return {};
	const needsDownload = downloadIfNeeded && (availability === "downloadable" || availability === "downloading");
	let downloadStarted = false;
	const notifyDownloadStart = () => {
		if (!needsDownload || downloadStarted) return;
		downloadStarted = true;
		options?.onModelDownload?.start?.(target);
	};
	notifyDownloadStart();
	const english = flattenTranslations(en_default);
	const keys = Object.keys(english);
	const translator = await Translator.create({
		sourceLanguage: "en",
		targetLanguage: target,
		...downloadIfNeeded ? { monitor(monitor) {
			monitor.addEventListener("downloadprogress", notifyDownloadStart);
		} } : {}
	});
	if (downloadStarted) options?.onModelDownload?.finish?.(target);
	const entries = await Promise.all(keys.map(async (key) => {
		const value = english[key];
		if (!value) return [key, ""];
		return [key, await translateProtectingPlaceholders(translator, value)];
	}));
	const result = Object.fromEntries(entries);
	cache.set(target, result);
	return result;
}

//#endregion
//#region ../core/dist/dev/core/i18n/load-locale.js
const loaders = {
	ar: () => import("./ar-DsPINVvV.js").then((n) => n.n),
	az: () => import("./az-BNG9I9VB.js").then((n) => n.n),
	bs: () => import("./bs-BvptjSqN.js").then((n) => n.n),
	bg: () => import("./bg-BdKU1ynW.js").then((n) => n.n),
	bn: () => import("./bn-DZmQ9OJ-.js").then((n) => n.n),
	ca: () => import("./ca-CoCZNriH.js").then((n) => n.n),
	cs: () => import("./cs-BV3Sx3fM.js").then((n) => n.n),
	cy: () => import("./cy-DudRluPj.js").then((n) => n.n),
	da: () => import("./da-II10K6Ey.js").then((n) => n.n),
	de: () => import("./de-B6OPMaJ5.js").then((n) => n.n),
	el: () => import("./el-EOboxCMK.js").then((n) => n.n),
	es: () => import("./es--93P_KGd.js").then((n) => n.n),
	et: () => import("./et-B_7oInYP.js").then((n) => n.n),
	eu: () => import("./eu-B6ITLPO5.js").then((n) => n.n),
	fa: () => import("./fa-Vvr1px4j.js").then((n) => n.n),
	fi: () => import("./fi-BG_ciEXf.js").then((n) => n.n),
	fr: () => import("./fr-CHcVddjH.js").then((n) => n.n),
	gd: () => import("./gd-4GF6aH0c.js").then((n) => n.n),
	gl: () => import("./gl-CMgj66_6.js").then((n) => n.n),
	he: () => import("./he-DfwOOgbT.js").then((n) => n.n),
	hi: () => import("./hi-BZ3n5dDB.js").then((n) => n.n),
	hr: () => import("./hr-WZJQxYNC.js").then((n) => n.n),
	hu: () => import("./hu-XOjo5JlM.js").then((n) => n.n),
	id: () => import("./id-D9XC3sJi.js").then((n) => n.n),
	it: () => import("./it-CDVRQsJC.js").then((n) => n.n),
	ja: () => import("./ja-Di4sbE9W.js").then((n) => n.n),
	ko: () => import("./ko-CvalpIGs.js").then((n) => n.n),
	lt: () => import("./lt-ZQzwrnWQ.js").then((n) => n.n),
	lv: () => import("./lv-CsVQVy3v.js").then((n) => n.n),
	mr: () => import("./mr-CgFYVcpx.js").then((n) => n.n),
	nb: () => import("./nb-DWtHJLYf.js").then((n) => n.n),
	nl: () => import("./nl-BbWS-uoT.js").then((n) => n.n),
	nn: () => import("./nn-BoY6X0bu.js").then((n) => n.n),
	ne: () => import("./ne-DQx0S7DC.js").then((n) => n.n),
	oc: () => import("./oc-BJrdQkma.js").then((n) => n.n),
	pl: () => import("./pl-HlPnZjYT.js").then((n) => n.n),
	"pt-br": () => import("./pt-BR-Cfv1ox9K.js").then((n) => n.n),
	"pt-pt": () => import("./pt-PT-DdJVXfMB.js").then((n) => n.n),
	ro: () => import("./ro-X-mft-iF.js").then((n) => n.n),
	ru: () => import("./ru-15_5g81L.js").then((n) => n.n),
	sk: () => import("./sk-BEvGx8AE.js").then((n) => n.n),
	sl: () => import("./sl-BqYDAX6g.js").then((n) => n.n),
	sr: () => import("./sr-D10ir4DL.js").then((n) => n.n),
	sv: () => import("./sv-he8gk9up.js").then((n) => n.n),
	te: () => import("./te-DhEDBJ0Q.js").then((n) => n.n),
	th: () => import("./th-B3iYzmd5.js").then((n) => n.n),
	tr: () => import("./tr-BJOEOizJ.js").then((n) => n.n),
	uk: () => import("./uk-BTa1prcg.js").then((n) => n.n),
	vi: () => import("./vi-CGDf02ms.js").then((n) => n.n),
	"zh-cn": () => import("./zh-CN-C_IU0JUw.js").then((n) => n.n),
	"zh-tw": () => import("./zh-TW-BvuhCu_U.js").then((n) => n.n),
	pt: () => import("./pt-BUBSLaBp.js").then((n) => n.t),
	zh: () => import("./zh-34ObMhvt.js").then((n) => n.t)
};
/** Lazy-import a shipped locale pack when the tag is not already in the registry. */
async function loadLocale(tag) {
	if (hasRegisteredLocale(tag)) return void 0;
	for (const chainTag of findLocaleKeys(tag)) {
		if (hasRegisteredLocale(chainTag)) return void 0;
		const load = loaders[getCanonicalLocaleKey(chainTag)];
		if (load) return flattenTranslations((await load()).default);
	}
}

//#endregion
//#region ../core/dist/dev/core/i18n/resolve-translation.js
/** Resolves a semantic key with optional template params via a translator. */
function resolveTranslation(translator, key, ...args) {
	const [params] = args;
	const translate = translator;
	return params !== void 0 ? translate(key, params) : translate(key);
}

//#endregion
//#region ../core/dist/dev/core/i18n/text.js
function isText(value) {
	return isObject(value) && "key" in value && "text" in value;
}

//#endregion
//#region ../core/dist/dev/core/i18n/translator.js
/**
* Builds a typed translator from a resolved translation map (typically from `getI18nTranslations`).
*
* @param translations - Merged translation map for the active locale.
* @param locale - BCP 47 tag associated with the map (reserved for future locale-aware behavior).
* @public
*/
function createTranslator(translations, locale) {
	const translate = (input, params) => {
		const options = params;
		const isDescriptor = typeof input !== "string";
		const key = isDescriptor ? input.key : input;
		const translation = translations[key];
		if (translation === void 0 && !isDescriptor && options?.default === void 0) console.warn(`[videojs] Missing translation for "${key}".`);
		const fallback = options?.default;
		const values = options ? { ...options } : void 0;
		if (values) delete values.default;
		return interpolate(translation ?? (isDescriptor ? input.text : fallback) ?? String(key), values);
	};
	return translate;
}

//#endregion
export { DEFAULT_LOCALE, createTranslator, findLocaleKeys, getBrowserTranslations, getI18nTranslations, hasRegisteredLocale, isText, loadLocale, onI18nRegistryChange, registerI18n, resolveBrowserTranslationTarget, resolveText, resolveTranslation, shouldAttemptBrowserTranslation, translateText };
//# sourceMappingURL=i18n.dev.js.map