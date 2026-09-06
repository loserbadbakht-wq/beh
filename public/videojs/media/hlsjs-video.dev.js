import { t as CustomMediaElement } from "../custom-media-element-C7az7smh.js";
import { i as safeDefine } from "../context-DlE_3NHA.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-CWg-oTmJ.js";
import { t as HlsJsMedia } from "../media-dVBchfvA.js";

//#region src/media/hlsjs-video/media.ts
var HlsJsVideo = class extends MediaAttachMixin(CustomMediaElement("video", HlsJsMedia)) {};

//#endregion
//#region src/define/media/hlsjs-video.ts
/** Cross-browser HLS media element powered by hls.js and registered as `<hlsjs-video>`. */
var HlsJsVideoElement = class extends HlsJsVideo {
	static {
		this.tagName = "hlsjs-video";
	}
};
safeDefine(HlsJsVideoElement);

//#endregion
export { HlsJsVideoElement };
//# sourceMappingURL=hlsjs-video.dev.js.map