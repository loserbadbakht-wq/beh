import { n as mediaContext, o as ContextRequestEvent } from "./context-OhQY847V.js";

//#region src/store/media-attach-mixin.ts
/**
* Create a mixin that consumes `mediaContext` and registers the
* element as the media with the provider.
*
* Uses the raw context-request protocol so it works with any
* `HTMLElement` subclass — no `ReactiveControllerHost` required.
*
* @param context - The media context to consume.
*/
function createMediaAttachMixin(context) {
	return (BaseClass) => {
		class MediaAttachElement extends BaseClass {
			#setMedia = null;
			#unsubscribe = null;
			getMediaTarget() {
				return this;
			}
			connectedCallback() {
				super.connectedCallback?.();
				this.dispatchEvent(new ContextRequestEvent(context, this, (value, unsubscribe) => {
					if (unsubscribe) this.#unsubscribe = unsubscribe;
					this.#setMedia = value?.setMedia ?? null;
					if (this.isConnected) this.#setMedia?.(this.getMediaTarget());
				}, true));
			}
			disconnectedCallback() {
				this.#setMedia?.(null);
				this.#unsubscribe?.();
				this.#unsubscribe = null;
				this.#setMedia = null;
				super.disconnectedCallback?.();
			}
		}
		return MediaAttachElement;
	};
}
const MediaAttachMixin = createMediaAttachMixin(mediaContext);

//#endregion
export { MediaAttachMixin as t };
//# sourceMappingURL=media-attach-mixin-uThv5NL_.js.map