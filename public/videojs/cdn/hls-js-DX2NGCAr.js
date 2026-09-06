import { t as CustomMediaElement } from "./custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaAttachMixin } from "./media-attach-mixin-uThv5NL_.js";
import { t as MuxMedia } from "./media-BNuI0Im7.js";
import { t as MuxVideoMixin } from "./mixin-NrVEcofN.js";

//#region src/media/mux-video/hls-js.ts
const MuxVideoBase = MuxVideoMixin(MediaAttachMixin(CustomMediaElement("video", MuxMedia)));
var MuxVideo = class extends MuxVideoBase {};

//#endregion
//#region src/define/media/mux-video/hls-js.ts
var MuxVideoElement = class extends MuxVideo {
	static {
		this.tagName = "mux-video";
	}
};
safeDefine(MuxVideoElement);

//#endregion
export { MuxVideoElement as t };
//# sourceMappingURL=hls-js-DX2NGCAr.js.map