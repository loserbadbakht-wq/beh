import { a as escapeHtml } from "./attributes-c6az3W3y.js";

//#region src/i18n/render-text.ts
/** Render a text descriptor as keyed media-text markup. */
function renderText(text, attrs) {
	const attrText = Object.entries(attrs ?? {}).map(([key, value]) => ` ${key}="${escapeHtml(value)}"`).join("");
	return `<media-text token="${escapeHtml(text.key)}"${attrText}>${escapeHtml(text.text)}</media-text>`;
}

//#endregion
export { renderText as t };
//# sourceMappingURL=render-text-BsnoAOz9.js.map