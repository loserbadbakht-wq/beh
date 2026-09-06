import { s as isObject } from "./predicate-DrcmolBs.js";
import { a as onI18nRegistryChange, c as isDefaultLocale, i as hasRegisteredLocale, l as flattenTranslations, n as getCanonicalLocaleKey, o as registerI18n, r as getI18nTranslations, s as DEFAULT_LOCALE, t as findLocaleKeys } from "./i18n-C51wLeb2.js";
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
* Replaces `{seconds}` with `{0}`, `{1}`, … so the Browser Translation API sees one full sentence (grammar/word order
* preserved) while opaque numeric slots are left alone.
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
function getBrowserTranslator() {
	if (!("Translator" in globalThis)) return void 0;
	return globalThis.Translator;
}
/** First non-default tag in the lookup chain used as the browser translation target. */
function resolveBrowserTranslationTarget(locale) {
	for (const tag of findLocaleKeys(locale)) if (!isDefaultLocale(tag)) return tag;
}
/** Whether to invoke the Browser Translation API for this locale after lazy built-in loading. */
function shouldAttemptBrowserTranslation(locale, loadedLazyTags, translations) {
	if (!resolveBrowserTranslationTarget(locale)) return false;
	if (loadedLazyTags.some((tag) => !isDefaultLocale(tag))) return translations !== void 0 && hasMissingEnglishTranslations(translations);
	return !findLocaleKeys(locale).some((tag) => !isDefaultLocale(tag) && hasRegisteredLocale(tag));
}
function hasMissingEnglishTranslations(translations) {
	const english = flattenTranslations(en_default);
	return Object.keys(english).some((key) => translations[key] === void 0);
}
/**
* Translates English registry values via the on-device Browser Translation API when a pre-installed model is available.
* Results are cached per target language tag.
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
	ar: () => import("./ar-DDt-rjP7.js").then((n) => n.n),
	az: () => import("./az-CjoqVjpW.js").then((n) => n.n),
	bs: () => import("./bs-C0mHdxD5.js").then((n) => n.n),
	bg: () => import("./bg-Bcu4WfJb.js").then((n) => n.n),
	bn: () => import("./bn-D0QnozXS.js").then((n) => n.n),
	ca: () => import("./ca-CJ2YTgSR.js").then((n) => n.n),
	cs: () => import("./cs-CcTE4YzU.js").then((n) => n.n),
	cy: () => import("./cy-CjMpOx7n.js").then((n) => n.n),
	da: () => import("./da-CCx42rZd.js").then((n) => n.n),
	de: () => import("./de-BdpMG9Ce.js").then((n) => n.n),
	el: () => import("./el-XaYeKCZ9.js").then((n) => n.n),
	es: () => import("./es-DtDlLEJc.js").then((n) => n.n),
	et: () => import("./et-bjYxk2oq.js").then((n) => n.n),
	eu: () => import("./eu-CMHs4pGN.js").then((n) => n.n),
	fa: () => import("./fa-CtdLd-dZ.js").then((n) => n.n),
	fi: () => import("./fi-Di9uxaNI.js").then((n) => n.n),
	fr: () => import("./fr-CBFFSsnO.js").then((n) => n.n),
	gd: () => import("./gd-DKS7-Tpe.js").then((n) => n.n),
	gl: () => import("./gl-Df1zquk7.js").then((n) => n.n),
	he: () => import("./he-C9WzHF_q.js").then((n) => n.n),
	hi: () => import("./hi-DcDlAmg2.js").then((n) => n.n),
	hr: () => import("./hr-D49xoQU0.js").then((n) => n.n),
	hu: () => import("./hu-DXQC0emZ.js").then((n) => n.n),
	id: () => import("./id-mrjgwwxM.js").then((n) => n.n),
	it: () => import("./it-bJ0MgguF.js").then((n) => n.n),
	ja: () => import("./ja-DOBxt3aM.js").then((n) => n.n),
	ko: () => import("./ko-DeXB16Jw.js").then((n) => n.n),
	lt: () => import("./lt-DgI6yTtg.js").then((n) => n.n),
	lv: () => import("./lv-DFvPqjF-.js").then((n) => n.n),
	mr: () => import("./mr-Brs-ho9P.js").then((n) => n.n),
	nb: () => import("./nb-0HDjljLB.js").then((n) => n.n),
	nl: () => import("./nl-CGEZqtSQ.js").then((n) => n.n),
	nn: () => import("./nn-BMybZXsp.js").then((n) => n.n),
	ne: () => import("./ne-DfBlT6_9.js").then((n) => n.n),
	oc: () => import("./oc-C2puxEOL.js").then((n) => n.n),
	pl: () => import("./pl-tqI8snkW.js").then((n) => n.n),
	"pt-br": () => import("./pt-BR-CNQlXO16.js").then((n) => n.n),
	"pt-pt": () => import("./pt-PT-Ci1bsZBf.js").then((n) => n.n),
	ro: () => import("./ro-CLBR2jQN.js").then((n) => n.n),
	ru: () => import("./ru-BRVlOHgL.js").then((n) => n.n),
	sk: () => import("./sk-Dr49omZg.js").then((n) => n.n),
	sl: () => import("./sl-GF5hE_eE.js").then((n) => n.n),
	sr: () => import("./sr-CTUgkP74.js").then((n) => n.n),
	sv: () => import("./sv-C2hsPTuw.js").then((n) => n.n),
	te: () => import("./te-C0gOEJND.js").then((n) => n.n),
	th: () => import("./th-CCVw4yiE.js").then((n) => n.n),
	tr: () => import("./tr-DWvjJsh0.js").then((n) => n.n),
	uk: () => import("./uk-CeTUcOvz.js").then((n) => n.n),
	vi: () => import("./vi-CzRnRnkS.js").then((n) => n.n),
	"zh-cn": () => import("./zh-CN-DJYiaVMs.js").then((n) => n.n),
	"zh-tw": () => import("./zh-TW-IB6B5kKt.js").then((n) => n.n),
	pt: () => import("./pt-B_CRujgl.js").then((n) => n.t),
	zh: () => import("./zh-BjuQMp4m.js").then((n) => n.t)
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
		const raw = translation ?? (isDescriptor ? input.text : fallback) ?? String(key);
		return interpolate(raw, values);
	};
	return translate;
}

//#endregion
export { DEFAULT_LOCALE, createTranslator, findLocaleKeys, getBrowserTranslations, getI18nTranslations, hasRegisteredLocale, isText, loadLocale, onI18nRegistryChange, registerI18n, resolveBrowserTranslationTarget, resolveText, resolveTranslation, shouldAttemptBrowserTranslation, translateText };
//# sourceMappingURL=i18n.dev.js.map