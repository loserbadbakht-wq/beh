import { t as MediaElement } from "./media-element-CJY3JIgc.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaContainerElement } from "./container-element-HHK_KZOE.js";
import { i as audioFeatures, t as createPlayer } from "./create-player-BEEc22xK.js";

//#region src/define/audio/player.ts
const { ProviderMixin } = createPlayer({ features: audioFeatures });
var AudioPlayerElement = class extends ProviderMixin(MediaElement) {
	static {
		this.tagName = "audio-player";
	}
};
safeDefine(AudioPlayerElement);
safeDefine(MediaContainerElement);

//#endregion
export { AudioPlayerElement as t };
//# sourceMappingURL=player-bEUswOOg.js.map