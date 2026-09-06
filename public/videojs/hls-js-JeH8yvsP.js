import { t as CustomMediaElement } from "./custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaAttachMixin } from "./media-attach-mixin-uThv5NL_.js";
import { t as MuxMedia } from "./media-BNuI0Im7.js";
import { t as MuxAudioMixin } from "./mixin-Co51mtM6.js";

//#region src/media/mux-audio/hls-js.ts
const MuxAudioBase = MuxAudioMixin(MediaAttachMixin(CustomMediaElement("audio", MuxMedia)));
var MuxAudio = class extends MuxAudioBase {};

//#endregion
//#region src/define/media/mux-audio/hls-js.ts
var MuxAudioElement = class extends MuxAudio {
	static {
		this.tagName = "mux-audio";
	}
};
safeDefine(MuxAudioElement);

//#endregion
export { MuxAudioElement as t };
//# sourceMappingURL=hls-js-JeH8yvsP.js.map