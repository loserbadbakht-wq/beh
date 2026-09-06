import { r as ReactiveElement, t as MediaElement } from "./media-element-CJY3JIgc.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaContainerElement } from "./container-element-HHK_KZOE.js";
import { a as backgroundFeatures, t as createPlayer } from "./create-player-BEEc22xK.js";
import { r as ensureGlobalStyle } from "./shadow-styles-BkjnRJ4e.js";
import "./background-video-WKumpp49.js";

//#region src/define/background/player.ts
const { ProviderMixin } = createPlayer({ features: backgroundFeatures });
var BackgroundVideoPlayerElement = class extends ProviderMixin(MediaElement) {
	static {
		this.tagName = "background-video-player";
	}
};
safeDefine(BackgroundVideoPlayerElement);
safeDefine(MediaContainerElement);

//#endregion
//#region inline-css:src/define/background/skin.js
var skin_default = "background-video-player {\n  display: contents;\n}\n\nbackground-video-skin {\n  --media-object-fit: cover;\n  position: relative;\n  display: block;\n  width: 100%;\n  min-width: 300px;\n  height: 100%;\n  min-height: 150px;\n  object-fit: var(--media-object-fit);\n}\n\n/*\n * Whatever the skin holds that isn't the placeholder image is the media, and gets\n * stretched over the host. Matched by what it is *not*, because there is no shared\n * base element or attribute the media flavors have in common — naming them by tag\n * meant a new one silently rendered at 0×0, having no box for its inner `<video>`\n * to be positioned against.\n *\n * `:not()` takes the specificity of its most specific argument, so this stays at\n * (0,0,2) — exactly where the tag-name selectors it replaces were.\n */\nbackground-video-skin > :not(img, picture) {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: inherit;\n}\n\nbackground-video-skin > img,\nbackground-video-skin > picture {\n  width: 100%;\n  height: 100%;\n  object-fit: inherit;\n}\n";

//#endregion
//#region src/define/background/skin.ts
const STYLES_ID = "__media-background-styles";
function getTemplateHTML() {
	return `
    <media-container>
      <!-- @deprecated slot="media" is no longer required, use the default slot instead -->
      <slot name="media"></slot>
      <slot></slot>
    </media-container>
  `;
}
var BackgroundVideoSkinElement = class extends ReactiveElement {
	static {
		this.tagName = "background-video-skin";
	}
	static {
		this.shadowRootOptions = { mode: "open" };
	}
	static {
		this.getTemplateHTML = getTemplateHTML;
	}
	constructor() {
		super();
		ensureGlobalStyle(STYLES_ID, skin_default);
		if (!this.shadowRoot) {
			this.attachShadow(this.constructor.shadowRootOptions);
			this.shadowRoot.innerHTML = getTemplateHTML();
		}
	}
};
safeDefine(BackgroundVideoSkinElement);

//#endregion
//# sourceMappingURL=background.dev.js.map