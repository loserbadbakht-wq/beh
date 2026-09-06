import { t as MediaElement } from "./media-element-CJY3JIgc.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaContainerElement } from "./container-element-HHK_KZOE.js";
import { o as liveAudioFeatures, t as createPlayer } from "./create-player-BEEc22xK.js";

//#region src/define/live-audio/player.ts
const { ProviderMixin } = createPlayer({ features: liveAudioFeatures });
var LiveAudioPlayerElement = class extends ProviderMixin(MediaElement) {
	static {
		this.tagName = "live-audio-player";
	}
};
safeDefine(LiveAudioPlayerElement);
safeDefine(MediaContainerElement);

//#endregion
export { LiveAudioPlayerElement as t };
//# sourceMappingURL=player-qLOeas8M.js.map