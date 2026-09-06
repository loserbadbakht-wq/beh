import { t as CustomMediaElement } from "../custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "../context-OhQY847V.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-uThv5NL_.js";
import { t as HlsJsMedia } from "../media-BavrGKqa.js";

//#region src/media/hlsjs-video/media.ts
var HlsJsVideo = class extends MediaAttachMixin(CustomMediaElement("video", HlsJsMedia)) {};

//#endregion
//#region src/define/media/hlsjs-video.ts
var HlsJsVideoElement = class extends HlsJsVideo {
	static {
		this.tagName = "hlsjs-video";
	}
};
safeDefine(HlsJsVideoElement);

//#endregion
export { HlsJsVideoElement };
//# sourceMappingURL=hlsjs-video.dev.js.map