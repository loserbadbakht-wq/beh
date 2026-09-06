import { n as ContextConsumer, t as MediaElement } from "./media-element-CJY3JIgc.js";
import { a as createContext, o as ContextRequestEvent, r as playerContext, t as containerContext } from "./context-OhQY847V.js";
import { t as listen } from "./listen-CdeggIF8.js";
import { DEFAULT_LOCALE, createTranslator, getI18nTranslations, onI18nRegistryChange } from "./i18n.dev.js";

//#region ../../node_modules/.pnpm/@lit+context@1.1.6/node_modules/@lit/context/development/lib/value-notifier.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* A simple class which stores a value, and triggers registered callbacks when
* the value is changed via its setter.
*
* An implementor might use other observable patterns such as MobX or Redux to
* get behavior like this. But this is a pretty minimal approach that will
* likely work for a number of use cases.
*/
var ValueNotifier = class {
	get value() {
		return this._value;
	}
	set value(v) {
		this.setValue(v);
	}
	setValue(v, force = false) {
		const update = force || !Object.is(v, this._value);
		this._value = v;
		if (update) this.updateObservers();
	}
	constructor(defaultValue) {
		this.subscriptions = /* @__PURE__ */ new Map();
		this.updateObservers = () => {
			for (const [callback, { disposer }] of this.subscriptions) callback(this._value, disposer);
		};
		if (defaultValue !== void 0) this.value = defaultValue;
	}
	addCallback(callback, consumerHost, subscribe) {
		if (!subscribe) {
			callback(this.value);
			return;
		}
		if (!this.subscriptions.has(callback)) this.subscriptions.set(callback, {
			disposer: () => {
				this.subscriptions.delete(callback);
			},
			consumerHost
		});
		const { disposer } = this.subscriptions.get(callback);
		callback(this.value, disposer);
	}
	clearCallbacks() {
		this.subscriptions.clear();
	}
};

//#endregion
//#region ../../node_modules/.pnpm/@lit+context@1.1.6/node_modules/@lit/context/development/lib/controllers/context-provider.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var ContextProviderEvent = class extends Event {
	/**
	*
	* @param context the context which this provider can provide
	* @param contextTarget the original context target of the provider
	*/
	constructor(context, contextTarget) {
		super("context-provider", {
			bubbles: true,
			composed: true
		});
		this.context = context;
		this.contextTarget = contextTarget;
	}
};
/**
* A ReactiveController which adds context provider behavior to a
* custom element.
*
* This controller simply listens to the `context-request` event when
* the host is connected to the DOM and registers the received callbacks
* against its observable Context implementation.
*
* The controller may also be attached to any HTML element in which case it's
* up to the user to call hostConnected() when attached to the DOM. This is
* done automatically for any custom elements implementing
* ReactiveControllerHost.
*/
var ContextProvider = class extends ValueNotifier {
	constructor(host, contextOrOptions, initialValue) {
		super(contextOrOptions.context !== void 0 ? contextOrOptions.initialValue : initialValue);
		this.onContextRequest = (ev) => {
			if (ev.context !== this.context) return;
			const consumerHost = ev.contextTarget ?? ev.composedPath()[0];
			if (consumerHost === this.host) return;
			ev.stopPropagation();
			this.addCallback(ev.callback, consumerHost, ev.subscribe);
		};
		/**
		* When we get a provider request event, that means a child of this element
		* has just woken up. If it's a provider of our context, then we may need to
		* re-parent our subscriptions, because is a more specific provider than us
		* for its subtree.
		*/
		this.onProviderRequest = (ev) => {
			if (ev.context !== this.context) return;
			if ((ev.contextTarget ?? ev.composedPath()[0]) === this.host) return;
			const seen = /* @__PURE__ */ new Set();
			for (const [callback, { consumerHost }] of this.subscriptions) {
				if (seen.has(callback)) continue;
				seen.add(callback);
				consumerHost.dispatchEvent(new ContextRequestEvent(this.context, consumerHost, callback, true));
			}
			ev.stopPropagation();
		};
		this.host = host;
		if (contextOrOptions.context !== void 0) this.context = contextOrOptions.context;
		else this.context = contextOrOptions;
		this.attachListeners();
		this.host.addController?.(this);
	}
	attachListeners() {
		this.host.addEventListener("context-request", this.onContextRequest);
		this.host.addEventListener("context-provider", this.onProviderRequest);
	}
	hostConnected() {
		this.host.dispatchEvent(new ContextProviderEvent(this.context, this.host));
	}
};

//#endregion
//#region src/i18n/context.ts
const I18N_CONTEXT_KEY = Symbol.for("@videojs/i18n");
/**
* The default i18n context instance for consuming the player store in controllers.
*
* @public
*/
const i18nContext = createContext(I18N_CONTEXT_KEY);

//#endregion
//#region ../utils/dist/dom/focus.js
function getDeepActiveElement(root = document) {
	let active = root.activeElement;
	while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
	return active;
}

//#endregion
//#region ../utils/dist/dom/predicates.js
function isDocument(value) {
	return value instanceof Node && value.nodeType === 9;
}
function isShadowRoot(value) {
	return value instanceof Node && value.nodeType === 11 && "host" in value;
}

//#endregion
//#region ../utils/dist/dom/tree.js
function containsComposed(root, element) {
	let current = element;
	while (current) {
		if (current === root || root.contains(current)) return true;
		const nodeRoot = current.getRootNode();
		current = isShadowRoot(nodeRoot) ? nodeRoot.host : current.parentNode;
	}
	return false;
}

//#endregion
//#region src/i18n/controller.ts
let fallbackTranslator;
function getFallbackTranslator() {
	fallbackTranslator ??= createTranslator(getI18nTranslations(DEFAULT_LOCALE), DEFAULT_LOCALE);
	return fallbackTranslator;
}
var I18nController = class {
	#host;
	#consumer;
	#unsubscribeRegistry;
	constructor(host, context) {
		this.#host = host;
		this.#consumer = new ContextConsumer(host, {
			context,
			callback: () => this.#host.requestUpdate(),
			subscribe: true
		});
		host.addController(this);
	}
	get value() {
		return this.#consumer.value?.translator ?? getFallbackTranslator();
	}
	get locale() {
		return this.#consumer.value?.locale ?? DEFAULT_LOCALE;
	}
	hostConnected() {
		fallbackTranslator = void 0;
		this.#unsubscribeRegistry = onI18nRegistryChange(() => {
			fallbackTranslator = void 0;
			if (!this.#consumer.value) this.#host.requestUpdate();
		});
	}
	hostDisconnected() {
		this.#unsubscribeRegistry?.();
		this.#unsubscribeRegistry = void 0;
	}
};

//#endregion
//#region ../core/dist/dev/dom/ui/container-attrs.js
const DEFAULT_CONTAINER_ROLE = "group";
function applyContainerAttrs(element) {
	if (!element.hasAttribute("role")) element.setAttribute("role", DEFAULT_CONTAINER_ROLE);
	if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", String(0));
}
function focusContainer(element) {
	const active = getDeepActiveElement(element.ownerDocument);
	if (!active || active === element.ownerDocument.body || !containsComposed(element, active)) element.focus({ preventScroll: true });
}

//#endregion
//#region ../core/dist/dev/dom/ui/popover/popup-group.js
function createPopupGroup() {
	let current = null;
	const listeners = /* @__PURE__ */ new Set();
	function notify() {
		for (const listener of listeners) listener();
	}
	return {
		open(member) {
			if (current === member) return;
			const previous = current;
			current = member;
			previous?.close("group-open");
			notify();
		},
		close(member) {
			if (current !== member) return;
			current = null;
			notify();
		},
		isOpenFor(trigger) {
			return trigger !== null && current?.triggerElement === trigger;
		},
		subscribe(listener) {
			listeners.add(listener);
			return () => listeners.delete(listener);
		}
	};
}

//#endregion
//#region ../core/dist/dev/i18n/text/container.js
const labelText = {
	key: `container.label`,
	text: "Media player"
};

//#endregion
//#region src/player/popup-group-context.ts
const POPUP_GROUP_CONTEXT_KEY = Symbol.for("@videojs/popup-group");
const popupGroupContext = createContext(POPUP_GROUP_CONTEXT_KEY);

//#endregion
//#region src/store/container-mixin.ts
/**
* Create a mixin that consumes player context and registers itself as the
* container element with the provider via `containerContext`.
*
* @param config - Container configuration with player and container contexts.
*/
function createContainerMixin(config) {
	return (BaseClass) => {
		class PlayerContainerElement extends BaseClass {
			#contextStore = null;
			#setContainer = null;
			#popupGroup = createPopupGroup();
			#popupGroupProvider = new ContextProvider(this, {
				context: popupGroupContext,
				initialValue: this.#popupGroup
			});
			constructor(...args) {
				super(...args);
				new ContextConsumer(this, {
					context: config.playerContext,
					callback: (value) => {
						this.#contextStore = value ?? null;
					},
					subscribe: true
				});
				new ContextConsumer(this, {
					context: config.containerContext,
					callback: (value) => {
						this.#setContainer = value?.setContainer ?? null;
						if (this.isConnected) this.#setContainer?.(this);
					},
					subscribe: true
				});
			}
			get store() {
				return this.#contextStore;
			}
			connectedCallback() {
				super.connectedCallback();
				this.#popupGroupProvider.setValue(this.#popupGroup);
				this.#setContainer?.(this);
			}
			disconnectedCallback() {
				super.disconnectedCallback();
				this.#setContainer?.(null);
			}
		}
		return PlayerContainerElement;
	};
}
/**
* Player container mixin configured for the default player contexts.
*
* Import this convenience mixin directly when composing a custom container.
*/
const ContainerMixin = createContainerMixin({
	playerContext,
	containerContext
});

//#endregion
//#region src/media/container-element.ts
var MediaContainerElement = class extends ContainerMixin(MediaElement) {
	static {
		this.tagName = "media-container";
	}
	#i18n = new I18nController(this, i18nContext);
	#disconnect = null;
	#label = null;
	connectedCallback() {
		super.connectedCallback();
		applyContainerAttrs(this);
		this.#applyLabel();
		this.#disconnect = new AbortController();
		listen(this, "pointerup", this.#onPointerUp, { signal: this.#disconnect.signal });
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
	update(changed) {
		super.update(changed);
		this.#applyLabel();
	}
	#applyLabel() {
		const current = this.getAttribute("aria-label");
		if (current && current !== this.#label) return;
		if (this.hasAttribute("aria-labelledby")) {
			if (current === this.#label) {
				this.removeAttribute("aria-label");
				this.#label = null;
			}
			return;
		}
		const label = this.#i18n.value(labelText);
		this.setAttribute("aria-label", label);
		this.#label = label;
	}
	#onPointerUp = () => {
		focusContainer(this);
	};
};

//#endregion
export { containsComposed as a, i18nContext as c, getFallbackTranslator as i, ContextProvider as l, popupGroupContext as n, isDocument as o, I18nController as r, getDeepActiveElement as s, MediaContainerElement as t };
//# sourceMappingURL=container-element-HHK_KZOE.js.map