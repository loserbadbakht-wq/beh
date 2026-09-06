import { t as CustomMediaElement } from "../custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "../context-OhQY847V.js";
import { t as HlsVideoMedia } from "../media-B6LoDnMy.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-uThv5NL_.js";

//#region src/media/hls-video/media.ts
var HlsVideo = class extends MediaAttachMixin(CustomMediaElement("video", HlsVideoMedia)) {};

//#endregion
//#region src/define/media/hls-video.ts
var HlsVideoElement = class extends HlsVideo {
	static {
		this.tagName = "hls-video";
	}
};
safeDefine(HlsVideoElement);

//#endregion
export { HlsVideoElement };
//# sourceMappingURL=hls-video.dev.js.map