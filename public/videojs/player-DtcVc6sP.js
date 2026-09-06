import { t as MediaElement } from "./media-element-CJY3JIgc.js";
import { i as safeDefine } from "./context-OhQY847V.js";
import { t as MediaContainerElement } from "./container-element-HHK_KZOE.js";
import { s as liveVideoFeatures, t as createPlayer } from "./create-player-BEEc22xK.js";

//#region src/define/live-video/player.ts
const { ProviderMixin } = createPlayer({ features: liveVideoFeatures });
var LiveVideoPlayerElement = class extends ProviderMixin(MediaElement) {
	static {
		this.tagName = "live-video-player";
	}
};
safeDefine(LiveVideoPlayerElement);
safeDefine(MediaContainerElement);

//#endregion
export { LiveVideoPlayerElement as t };
//# sourceMappingURL=player-DtcVc6sP.js.map