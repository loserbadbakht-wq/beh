import { r as ReactiveElement } from "./ui-element-DraIA8Ee.js";
import { i as safeDefine } from "./context-DlE_3NHA.js";
import { a as backgroundFeatures, t as createPlayer } from "./create-player-Duo2X4dJ.js";
import { t as ContainerElement, w as ensureGlobalStyle } from "./container-element-DGG9TQ6W.js";
import "./background-video-bRNFUuKq.js";

//#region src/presets/background/player.ts
const { PlayerElement, PlayerController: BackgroundVideoPlayerController } = createPlayer({ features: backgroundFeatures });
var BackgroundVideoPlayerElement = class extends PlayerElement {
	static {
		this.tagName = "background-video-player";
	}
};

//#endregion
//#region src/define/background/player.ts
safeDefine(BackgroundVideoPlayerElement);

//#endregion
//#region src/define/background/skin.css?inline
var skin_default = "background-video-player {\n  display: contents;\n}\n\nbackground-video-skin {\n  --media-object-fit: cover;\n  object-fit: var(--media-object-fit);\n  width: 100%;\n  min-width: 300px;\n  height: 100%;\n  min-height: 150px;\n  display: block;\n  position: relative;\n}\n\nbackground-video-skin > :not(img, picture) {\n  object-fit: inherit;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  inset: 0;\n}\n\nbackground-video-skin > img, background-video-skin > picture {\n  object-fit: inherit;\n  width: 100%;\n  height: 100%;\n}\n";

//#endregion
//#region src/presets/background/skin.ts
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

//#endregion
//#region src/define/ui/container.ts
safeDefine(ContainerElement);

//#endregion
//#region src/define/background/skin.ts
safeDefine(BackgroundVideoSkinElement);

//#endregion
//# sourceMappingURL=background.dev.js.map