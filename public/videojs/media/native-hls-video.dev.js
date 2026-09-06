import { t as CustomMediaElement } from "../custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "../context-OhQY847V.js";
import { t as NativeHlsMedia } from "../media-Wq1AGln1.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-uThv5NL_.js";

//#region src/media/native-hls-video/media.ts
var NativeHlsVideo = class extends MediaAttachMixin(CustomMediaElement("video", NativeHlsMedia)) {};

//#endregion
//#region src/define/media/native-hls-video.ts
var NativeHlsVideoElement = class extends NativeHlsVideo {
	static {
		this.tagName = "native-hls-video";
	}
};
safeDefine(NativeHlsVideoElement);

//#endregion
export { NativeHlsVideoElement };
//# sourceMappingURL=native-hls-video.dev.js.map