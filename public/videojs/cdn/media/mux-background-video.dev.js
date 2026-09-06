import { i as safeDefine } from "../context-OhQY847V.js";
import { t as HlsBackgroundVideo } from "../media-B4uT13xV2.js";

//#region src/define/media/mux-background-video.ts
/**
* `<mux-background-video>` — the Mux-flavored tag for `<hls-background-video>`.
*
* A distinct subclass rather than a re-export because a custom-element class can
* hold one tag name: registering the same class twice throws. The behavior is
* entirely the shared base's.
*/
var MuxBackgroundVideoElement = class extends HlsBackgroundVideo {
	static {
		this.tagName = "mux-background-video";
	}
};
safeDefine(MuxBackgroundVideoElement);

//#endregion
export { MuxBackgroundVideoElement };
//# sourceMappingURL=mux-background-video.dev.js.map