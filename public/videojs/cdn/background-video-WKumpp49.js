import { t as namedNodeMapToObject } from "./attributes-c6az3W3y.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaAttachMixin } from "./media-attach-mixin-uThv5NL_.js";
import { t as getTemplateHTML } from "./template-CBmklOD-.js";

//#region src/media/background-video/media.ts
var BackgroundVideo = class extends MediaAttachMixin(HTMLElement) {
	static {
		this.shadowRootOptions = { mode: "open" };
	}
	static {
		this.getTemplateHTML = getTemplateHTML;
	}
	static get observedAttributes() {
		return ["src"];
	}
	constructor() {
		super();
		if (!this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			const attrs = {
				...namedNodeMapToObject(this.attributes),
				...!this.hasAttribute("nomuted") && { muted: "" },
				...!this.hasAttribute("noloop") && { loop: "" },
				...!this.hasAttribute("noautoplay") && { autoplay: "" },
				playsinline: "",
				disableremoteplayback: "",
				disablepictureinpicture: ""
			};
			this.shadowRoot.innerHTML = getTemplateHTML(attrs);
		}
		this.target.muted = !this.hasAttribute("nomuted");
	}
	getMediaTarget() {
		return this.target;
	}
	attributeChangedCallback(attrName, oldValue, newValue) {
		if (attrName === "src" && oldValue !== newValue) this.target.src = newValue ?? "";
	}
	get target() {
		const slotted = this.querySelector(":scope > [slot=media]");
		if (slotted instanceof HTMLVideoElement) return slotted;
		const video = this.querySelector("video") ?? this.shadowRoot?.querySelector("video");
		return video instanceof HTMLVideoElement ? video : null;
	}
};

//#endregion
//#region src/define/media/background-video.ts
var BackgroundVideoElement = class extends BackgroundVideo {
	static {
		this.tagName = "background-video";
	}
};
safeDefine(BackgroundVideoElement);

//#endregion
export { BackgroundVideoElement as t };
//# sourceMappingURL=background-video-WKumpp49.js.map