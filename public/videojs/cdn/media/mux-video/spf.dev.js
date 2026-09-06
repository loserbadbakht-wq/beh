import { t as CustomMediaElement } from "../../custom-media-element-D2JoODKd.js";
import { i as safeDefine } from "../../context-OhQY847V.js";
import { t as HlsVideoMedia } from "../../media-B6LoDnMy.js";
import { t as MediaAttachMixin } from "../../media-attach-mixin-uThv5NL_.js";
import { t as MuxMediaMixin } from "../../adapter-CEnNWvii.js";
import { t as MuxVideoMixin } from "../../mixin-NrVEcofN.js";

//#region ../spf/dist/dev/playback/adapters/mux-video/media.js
const MuxVideoMediaBase = MuxMediaMixin(HlsVideoMedia);
/**
* The Mux Media over the SPF HLS engine.
*
* Mirrors `@videojs/media/dom/mux`'s hls.js-backed `MuxMedia` — same class shape,
* same `src`/`source` relationship, same derived `contentData` — over a different
* engine, though named for the flavor rather than sharing that class's name. It
* carries no `engine` or `preferPlayback`: SPF publishes no
* engine-shaped config for a consumer to pass, so the source is Mux identity and
* nothing else.
*
* `source.drm` is accepted but inert. SPF prunes encrypted renditions and reports
* unsupported DRM, and `alternativeMediaSuggestion` points at the hls.js-backed
* import, so a protected source fails with copy that says where to go.
*/
var MuxVideoMedia = class extends MuxVideoMediaBase {};

//#endregion
//#region src/media/mux-video/spf.ts
const MuxVideoBase = MuxVideoMixin(MediaAttachMixin(CustomMediaElement("video", MuxVideoMedia)));
/**
* `<mux-video>` over the SPF-backed Mux Media instead of the hls.js-backed one.
*
* Shares its name with the flavor in `./hls-js` on purpose: the import path picks
* the engine, and nothing else about the surface moves. Deliberately not exported
* from this directory's barrel, so importing one flavor never pulls the other's
* engine in with it.
*/
var MuxVideo = class extends MuxVideoBase {};

//#endregion
//#region src/define/media/mux-video/spf.ts
var MuxVideoElement = class extends MuxVideo {
	static {
		this.tagName = "mux-video";
	}
};
safeDefine(MuxVideoElement);

//#endregion
export { MuxVideoElement };
//# sourceMappingURL=spf.dev.js.map