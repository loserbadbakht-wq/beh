import { t as CustomMediaElement } from "../custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "../context-OhQY847V.js";
import { t as MediaAttachMixin } from "../media-attach-mixin-uThv5NL_.js";
import { t as HlsAudioMedia } from "../media-aZ7x4gGL.js";

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