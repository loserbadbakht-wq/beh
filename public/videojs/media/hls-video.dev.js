import { t as CustomMediaElement } from "../custom-media-element-C7az7smh.js";
import { i as safeDefine } from "../context-DlE_3NHA.js";
import { t as HlsVideoMedia } from "../media-B8KRgODy.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-CWg-oTmJ.js";

//#region src/media/hls-video/media.ts
var HlsVideo = class extends MediaAttachMixin(CustomMediaElement("video", HlsVideoMedia)) {};

//#endregion
//#region src/define/media/hls-video.ts
/** Lightweight SPF-backed HLS media element registered as `<hls-video>`. */
var HlsVideoElement = class extends HlsVideo {
	static {
		this.tagName = "hls-video";
	}
};
safeDefine(HlsVideoElement);

//#endregion
export { HlsVideoElement };
//# sourceMappingURL=hls-video.dev.js.map