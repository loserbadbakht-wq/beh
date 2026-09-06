import { t as CustomMediaElement } from "../custom-media-element-C7az7smh.js";
import { i as safeDefine } from "../context-DlE_3NHA.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-CWg-oTmJ.js";
import { t as HlsAudioMedia } from "../media-DlKZA0Xm.js";

//#region src/media/hls-audio/media.ts
var HlsAudio = class extends MediaAttachMixin(CustomMediaElement("audio", HlsAudioMedia)) {};

//#endregion
//#region src/define/media/hls-audio.ts
var HlsAudioElement = class extends HlsAudio {
	static {
		this.tagName = "hls-audio";
	}
};
safeDefine(HlsAudioElement);

//#endregion
export { HlsAudioElement };
//# sourceMappingURL=hls-audio.dev.js.map