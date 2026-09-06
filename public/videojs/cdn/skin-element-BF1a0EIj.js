import { r as ReactiveElement } from "./media-element-CJY3JIgc.js";
import { n as createShadowStyle, r as ensureGlobalStyle, t as applyShadowStyles } from "./shadow-styles-BkjnRJ4e.js";
import { a as renderTemplate } from "./template-ClYP_1RH.js";

//#region inline-css:src/define/global.js
var global_default = "/* -------------------------------------------------------------------------- */\n/* Global styles for the host document, outside of the Shadow DOM             */\n/* -------------------------------------------------------------------------- */\n\nvideo-player,\nlive-video-player,\nmedia-i18n {\n  display: contents;\n}\n\n/*\nRequired to override any default video and image styles (such as\nTailwind's CSS reset) and ensure they fill the container as expected.\n*/\nvideo-player video,\nvideo-player [slot=\"poster\"],\nlive-video-player video,\nlive-video-player [slot=\"poster\"] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nvideo-player video::-webkit-media-text-track-container,\nlive-video-player video::-webkit-media-text-track-container {\n  z-index: 1;\n  font-family: inherit;\n  scale: 0.98;\n  translate: 0 var(--media-caption-track-y, 0);\n  transition: translate var(--media-caption-track-duration, 0) ease-out;\n  transition-delay: var(--media-caption-track-delay, 0);\n}\n";

//#endregion
//#region inline-css:src/define/shared.js
var shared_default = "/* -------------------------------------------------------------------------- */\n/* Shared styles for all HTML skins                                           */\n/* -------------------------------------------------------------------------- */\n\nmedia-tooltip-group {\n  display: contents;\n}\n\n:host {\n  /* `display:grid` fixes a weird issue with Safari when setting aspect-ratio */\n  display: grid;\n  width: 100%;\n}\n\nmedia-container {\n  min-width: 0;\n  min-height: 0;\n}\n\n/* Hide the volume popover when its slider is unavailable. */\n.media-popover--volume:has(media-volume-slider[data-hidden]) {\n  display: none;\n}\n";

//#endregion
//#region src/define/skin-element.ts
const STYLES_ID = "__media-styles";
const sharedSheet = createShadowStyle(shared_default);
/**
* Base element for skin definitions. Attaches a shadow root, clones
* `static template` into it, and applies shared + per-skin styles
* via `adoptedStyleSheets` (or `<style>` fallback).
*/
var SkinElement = class extends ReactiveElement {
	static {
		this.shadowRootOptions = { mode: "open" };
	}
	constructor() {
		super();
		ensureGlobalStyle(STYLES_ID, global_default);
		if (!this.shadowRoot) {
			const ctor = this.constructor;
			this.attachShadow(ctor.shadowRootOptions);
			if (ctor.template) renderTemplate(this.shadowRoot, ctor.template);
			const sheets = [sharedSheet];
			if (ctor.styles) sheets.push(ctor.styles);
			applyShadowStyles(this.shadowRoot, sheets);
		}
	}
};

//#endregion
export { SkinElement as t };
//# sourceMappingURL=skin-element-BF1a0EIj.js.map