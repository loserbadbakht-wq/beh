import { t as MediaElement } from "./media-element-CJY3JIgc.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaContainerElement } from "./container-element-HHK_KZOE.js";
import { c as videoFeatures, t as createPlayer } from "./create-player-BEEc22xK.js";

//#region src/define/video/player.ts
const { ProviderMixin } = createPlayer({ features: videoFeatures });
var VideoPlayerElement = class extends ProviderMixin(MediaElement) {
	static {
		this.tagName = "video-player";
	}
};
safeDefine(VideoPlayerElement);
safeDefine(MediaContainerElement);

//#endregion
export { VideoPlayerElement as t };
//# sourceMappingURL=player-BrlY19A2.js.map