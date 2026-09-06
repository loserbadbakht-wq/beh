import { t as CustomMediaElement } from "../custom-media-element-C7az7smh.js";
import { i as safeDefine } from "../context-DlE_3NHA.js";
import { t as NativeHlsMedia } from "../media-JJj2Ubfx.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-CWg-oTmJ.js";

//#region src/media/native-hls-video/media.ts
var NativeHlsVideo = class extends MediaAttachMixin(CustomMediaElement("video", NativeHlsMedia)) {};

//#endregion
//#region src/define/media/native-hls-video.ts
/** Browser-native HLS media element registered as `<native-hls-video>`. */
var NativeHlsVideoElement = class extends NativeHlsVideo {
	static {
		this.tagName = "native-hls-video";
	}
};
safeDefine(NativeHlsVideoElement);

//#endregion
export { NativeHlsVideoElement };
//# sourceMappingURL=native-hls-video.dev.js.map