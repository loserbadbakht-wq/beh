import { M as createTemplate, a as BufferingIndicatorElement, c as defineErrorDialog, d as defineSliders, f as defineTime, i as HotkeyElement, l as defineInputIndicators, m as defineTooltip, n as PlayButtonElement, r as MuteButtonElement, s as defineControls, t as PopoverElement, u as defineMenu, w as SkinElement } from "./popover-element-DYgnWFFt.js";
import { n as I18nProviderElement, t as TextElement } from "./text-element-CYeCUUcj.js";
import { i as safeDefine } from "./context-DlE_3NHA.js";
import { C as createShadowStyle, t as ContainerElement } from "./container-element-DGG9TQ6W.js";
import { a as renderText, i as AudioTrackRadioGroupElement, n as TimeSliderChapterTitleElement, r as QualityRadioGroupElement, t as TimeSliderChaptersElement } from "./time-slider-chapters-element-evnF3P5M.js";
import { t as GestureElement } from "./gesture-element-zte2cUud.js";
import "./player-DxcWi6bT.js";
import { a as captionsText, c as qualityText, l as settingsText, n as audioText, u as speedText } from "./radio-options-controller-C3ZBWVO0.js";
import { t as renderIcon } from "./default-DqtKC2hX.js";
import { a as CaptionsRadioGroupElement, i as CastButtonElement, n as PiPButtonElement, o as CaptionsButtonElement, r as FullscreenButtonElement, s as AirPlayButtonElement, t as PosterElement } from "./poster-element-DNHQiv_s.js";
import { t as LiveButtonElement } from "./live-button-element-MT_0u1RC.js";
import { n as PlaybackRateRadioGroupElement, r as PlaybackRateButtonElement, t as SeekButtonElement } from "./seek-button-element-C6NR8csO.js";

//#region src/define/video/skin.css?inline
var skin_default = "video-player, live-video-player, media-i18n, media-dialog, media-alert-dialog, media-error-dialog, media-controls {\n  display: contents;\n}\n\nmedia-container video, media-container [slot=\"poster\"] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\nmedia-container video::-webkit-media-text-track-container {\n  z-index: 1;\n  scale: .98;\n  translate: 0 var(--media-caption-track-y, 0);\n  transition: translate var(--media-caption-track-duration, 0) ease-out;\n  transition-delay: var(--media-caption-track-delay, 0);\n  font-family: inherit;\n}\n\nmedia-tooltip-group, media-dialog, media-alert-dialog, media-error-dialog, media-controls {\n  display: contents;\n}\n\n:host {\n  width: 100%;\n  display: grid;\n}\n\nmedia-container {\n  min-width: 0;\n  min-height: 0;\n}\n\n.media-popover--volume:has(media-volume-slider[data-hidden]) {\n  display: none;\n}\n\n.media-sr-only {\n  white-space: nowrap;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.media-default-skin *, .media-default-skin :before, .media-default-skin :after {\n  box-sizing: border-box;\n}\n\n.media-default-skin img, .media-default-skin video, .media-default-skin svg {\n  max-width: 100%;\n  display: block;\n}\n\n.media-default-skin button {\n  font: inherit;\n}\n\n.media-default-skin [hidden][hidden] {\n  display: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .media-default-skin {\n    interpolate-size: allow-keywords;\n  }\n}\n\n.media-default-skin {\n  --media-internal-accent-color: var(--media-accent-color, var(--media-default-accent-color));\n  --media-accent-contrast-color: contrast-color(var(--media-internal-accent-color));\n  --media-accent-background-color: var(--media-accent-color, oklch(from var(--media-default-accent-color) l c h / calc(alpha * .1)));\n  --media-internal-accent-text-color: var(--media-accent-text-color, contrast-color(var(--media-accent-color, oklch(0% 0 0))));\n  --media-shadow-current-color: oklch(from currentColor 0 0 0 / clamp(0, calc((l - .5) * .5), .15));\n  --media-shadow-subtle-current-color: oklch(from var(--media-shadow-current-color) l c h / calc(alpha * .4));\n  --media-scrollbar-thumb-color: oklch(from currentColor l c h / .3);\n  --media-scale: 1;\n  --media-internal-scale-unit: var(--media-scale-unit, 16px);\n  --media-size: calc(var(--media-internal-scale-unit) * var(--media-scale));\n  --media-spacing: calc(var(--media-size) / 4);\n  --media-font-size-medium: calc(.9375 * var(--media-size));\n  --media-font-size-base: calc(.8125 * var(--media-size));\n  --media-font-size-small: calc(.6875 * var(--media-size));\n  --media-font-size-tiny: calc(.5625 * var(--media-size));\n  --media-icon-size: calc(1.125 * var(--media-size));\n  --media-container-border-radius: var(--media-border-radius, 1.75rem);\n  width: 100%;\n  height: 100%;\n  font-family: Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif;\n  font-size: var(--media-font-size-base);\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n  letter-spacing: normal;\n  outline-offset: -4px;\n  scrollbar-color: var(--media-scrollbar-thumb-color) transparent;\n  scrollbar-width: thin;\n  border-radius: var(--media-container-border-radius, 1.75rem);\n  isolation: isolate;\n  outline: 2px solid #0000;\n  line-height: 1.5;\n  transition-property: outline-offset, outline-color;\n  transition-duration: .1s;\n  transition-timing-function: ease-out;\n  display: block;\n  position: relative;\n  container: media-root / inline-size;\n\n  &:focus-visible {\n    outline-color: var(--media-focus-ring-color);\n    outline-offset: 2px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--media-scrollbar-thumb-color);\n    border-radius: 9999px;\n  }\n\n  @media (prefers-reduced-transparency: reduce) or (prefers-contrast: more) {\n    --media-scrollbar-thumb-color: oklch(from currentColor l c h / .8);\n    scrollbar-width: auto;\n  }\n}\n\n.media-default-skin .media-surface {\n  background-color: var(--media-surface-background-color);\n  box-shadow: 0 0 0 1px var(--media-surface-outer-border-color),\n    0 1px 3px 0 var(--media-surface-shadow-color),\n    0 1px 2px -1px var(--media-surface-shadow-color);\n  backdrop-filter: var(--media-surface-backdrop-filter);\n\n  &:after {\n    z-index: 10;\n    pointer-events: none;\n    content: \"\";\n    border-radius: inherit;\n    box-shadow: inset 0 1px 0 0 var(--media-surface-inner-border-color),\n      inset 0 0 0 1px oklch(from var(--media-surface-inner-border-color) l c h / calc(alpha * .5));\n    position: absolute;\n    inset: 0;\n  }\n}\n\n.media-default-skin ::slotted(video), .media-default-skin video {\n  object-fit: var(--media-object-fit, contain);\n  object-position: var(--media-object-position, center);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.media-default-skin ::slotted(video) {\n  border-radius: var(--media-container-border-radius);\n}\n\n.media-default-skin video {\n  border-radius: inherit;\n}\n\n.media-default-skin:fullscreen ::slotted(video), .media-default-skin:fullscreen video {\n  object-fit: contain;\n}\n\n.media-default-skin .media-controls__backdrop {\n  z-index: 10;\n  pointer-events: none;\n  border-radius: inherit;\n  opacity: 0;\n  transition-timing-function: ease-out;\n  transition-duration: var(--media-controls-transition-duration);\n  background-image: linear-gradient(to top, oklch(0% 0 0 / .5), oklch(0% 0 0 / .3) 25%, oklch(0% 0 0 / 0));\n  transition-property: opacity;\n  position: absolute;\n  inset: 0;\n\n  &[data-visible] {\n    opacity: 1;\n  }\n}\n\n.media-default-skin .media-buffering-indicator {\n  z-index: 10;\n  color: oklch(100% 0 0);\n  pointer-events: none;\n  place-content: center;\n  display: none;\n  position: absolute;\n  inset: 0;\n\n  &:before {\n    content: \"\";\n    backdrop-filter: blur(8px);\n    background: oklch(0% 0 0 / .35);\n    position: absolute;\n    inset: 0;\n  }\n\n  & > * {\n    z-index: 20;\n    position: relative;\n  }\n\n  &:not([data-visible]) {\n    --media-spinner-animation: none;\n  }\n\n  &[data-visible] {\n    display: grid;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    --media-spinner-animation: none;\n  }\n}\n\n.media-default-skin {\n  & media-error-dialog {\n    z-index: 20;\n    outline: none;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    position: absolute;\n    inset: 0;\n\n    &:not([data-open]) {\n      display: none;\n    }\n  }\n\n  & .media-dialog__backdrop {\n    z-index: 10;\n    pointer-events: none;\n    backdrop-filter: blur(16px) saturate(1.5);\n    opacity: 1;\n    transition-timing-function: var(--media-dialog-transition-timing-function);\n    transition-duration: var(--media-dialog-transition-duration);\n    transition-property: opacity;\n    transition-delay: var(--media-dialog-transition-delay);\n    background: oklch(0% 0 0 / .2);\n    position: absolute;\n    inset: 0;\n\n    &[data-starting-style], &[data-ending-style] {\n      opacity: 0;\n    }\n\n    &[data-ending-style] {\n      transition-delay: 0s;\n    }\n\n    &:not([data-open]) {\n      display: none;\n    }\n  }\n\n  & .media-dialog__popup {\n    outline: none;\n  }\n\n  & .media-dialog__title {\n    font-weight: 600;\n    line-height: 1.25;\n  }\n\n  & .media-dialog__description {\n    overflow-wrap: anywhere;\n    opacity: .7;\n  }\n\n  & .media-dialog__actions {\n    gap: calc(var(--media-spacing) * 2);\n    display: flex;\n\n    & > * {\n      flex: 1;\n    }\n  }\n}\n\n.media-default-skin .media-controls {\n  --media-popover-side-offset: calc(var(--media-spacing) * (var(--media-base-side-offset, 2) + 1));\n  --media-tooltip-side-offset: var(--media-popover-side-offset);\n  --media-popover-boundary-offset: calc(var(--media-spacing) * var(--media-base-boundary-offset, 2));\n  --media-tooltip-boundary-offset: var(--media-popover-boundary-offset);\n  padding: calc(var(--media-spacing) * 1);\n  text-shadow: 0 1px 0 var(--media-shadow-current-color);\n  border-radius: 3.40282e38px;\n  align-items: center;\n  display: flex;\n  container: media-controls / inline-size;\n\n  &:dir(rtl) {\n    flex-direction: row-reverse;\n  }\n}\n\n.media-default-skin .media-time-controls {\n  gap: calc(var(--media-spacing) * 2.5);\n  flex: 1;\n  align-items: center;\n  display: flex;\n  container: media-time-controls / inline-size;\n\n  &:dir(rtl) {\n    flex-direction: row-reverse;\n  }\n\n  & > .media-time:last-child {\n    @container media-time-controls (width < 16rem) {\n      display: none;\n    }\n  }\n}\n\n.media-default-skin .media-time {\n  font-variant-numeric: tabular-nums;\n}\n\n.media-default-skin .media-time[role=\"button\"] {\n  cursor: pointer;\n  outline-offset: -2px;\n  border-radius: calc(var(--media-spacing) * 1);\n  outline: 2px solid #0000;\n  transition-property: outline-color, outline-offset;\n  transition-duration: .1s;\n  transition-timing-function: ease-out;\n\n  &:focus-visible {\n    outline-color: var(--media-focus-ring-color);\n    outline-offset: 2px;\n  }\n}\n\n.media-default-skin .media-button {\n  height: calc(var(--media-spacing) * 9);\n  min-height: 0;\n  padding: calc(var(--media-spacing) * 2) calc(var(--media-spacing) * 4);\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  outline-offset: -2px;\n  will-change: scale;\n  border: none;\n  border-radius: 3.40282e38px;\n  outline: 2px solid #0000;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  transition-property: background-color, color, outline-offset, scale;\n  transition-duration: .15s;\n  transition-timing-function: ease-out;\n  display: flex;\n\n  &:focus-visible {\n    outline-color: var(--media-focus-ring-color);\n    outline-offset: 2px;\n  }\n\n  &:active:not([aria-disabled=\"true\"]) {\n    scale: .97;\n  }\n\n  &[aria-disabled=\"true\"] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n}\n\n.media-default-skin .media-button--primary {\n  color: var(--media-accent-contrast-color);\n  text-shadow: none;\n  background: var(--media-internal-accent-color);\n  font-weight: 500;\n}\n\n.media-default-skin .media-button--subtle {\n  color: inherit;\n  text-shadow: inherit;\n  background: none;\n\n  &:not([aria-disabled=\"true\"]) {\n    &:hover, &:focus-visible, &[aria-expanded=\"true\"] {\n      color: var(--media-internal-accent-text-color);\n      background-color: var(--media-accent-background-color);\n      text-decoration: none;\n    }\n  }\n}\n\n.media-default-skin .media-button--icon {\n  aspect-ratio: 1;\n  padding: 0;\n  display: grid;\n\n  &:active:not([aria-disabled=\"true\"]) {\n    scale: .97;\n  }\n\n  & .media-icon__container {\n    display: grid;\n  }\n\n  & .media-icon {\n    filter: drop-shadow(0 1px 0 var(--media-shadow-current-color));\n    grid-area: 1 / 1;\n    transition-property: opacity, scale;\n    transition-duration: .15s;\n    transition-timing-function: ease-out;\n  }\n}\n\n.media-default-skin .media-button--seek {\n  & .media-icon__label {\n    font-variant-numeric: tabular-nums;\n    letter-spacing: -.05em;\n    font-size: .715em;\n    font-weight: 500;\n    position: absolute;\n    bottom: -3px;\n    right: -1px;\n  }\n\n  &:has(.media-icon--flipped) .media-icon__label {\n    right: unset;\n    left: -1px;\n  }\n}\n\n.media-default-skin .media-button--playback-rate {\n  font-variant-numeric: tabular-nums;\n  padding: 0;\n\n  &:after {\n    content: attr(data-rate) \"×\";\n    width: 4ch;\n  }\n\n  &[data-inline-rate-label]:after {\n    content: none;\n  }\n}\n\n.media-default-skin .media-button--settings {\n  & .media-icon--settings {\n    transition: transform .15s ease-in-out;\n\n    @media (prefers-reduced-motion: reduce) {\n      transition-duration: 0s;\n    }\n  }\n\n  &[aria-expanded=\"true\"] .media-icon--settings {\n    transform: rotate(90deg);\n  }\n}\n\n.media-default-skin .media-button--live {\n  gap: calc(var(--media-spacing) * 1.5);\n  aspect-ratio: auto;\n  width: auto;\n  padding: calc(var(--media-spacing) * 2) calc(var(--media-spacing) * 3);\n  font-size: var(--media-font-size-small);\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  align-items: center;\n  font-weight: 600;\n  line-height: 1;\n  display: inline-flex;\n\n  &:before {\n    width: calc(var(--media-spacing) * 2);\n    height: calc(var(--media-spacing) * 2);\n    content: \"\";\n    background-color: oklch(from currentColor l c h / .4);\n    border-radius: 50%;\n    flex-shrink: 0;\n    transition: background-color .15s ease-out;\n    display: inline-block;\n  }\n\n  &[data-live-edge]:before {\n    background-color: oklch(65% .22 27);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .media-default-skin .media-button {\n    will-change: auto;\n    transition-property: background-color, color;\n    scale: 1;\n  }\n}\n\n.media-default-skin .media-button-group {\n  align-items: center;\n  gap: 1px;\n  display: flex;\n\n  &:dir(rtl) {\n    flex-direction: row-reverse;\n  }\n}\n\n.media-default-skin .media-badge {\n  padding: calc(var(--media-spacing) * .5) calc(var(--media-spacing) * 1.5);\n  font-size: var(--media-font-size-small);\n  color: oklch(from currentColor l c h / .85);\n  white-space: nowrap;\n  background-color: oklch(from currentColor l c h / .1);\n  border-radius: 3.40282e38px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.media-default-skin .media-icon__container {\n  position: relative;\n}\n\n.media-default-skin .media-icon {\n  width: var(--media-icon-size);\n  height: var(--media-icon-size);\n  flex-shrink: 0;\n}\n\n.media-default-skin .media-icon--flipped, .media-default-skin:dir(rtl) .media-menu__chevron {\n  scale: -1 1;\n}\n\n.media-default-skin:dir(rtl) .media-menu__chevron.media-icon--flipped {\n  scale: 1;\n}\n\n.media-default-skin media-poster, .media-default-skin > img {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  transition: opacity .25s;\n  position: absolute;\n  inset: 0;\n}\n\n.media-default-skin media-poster:not([data-visible]), .media-default-skin > img:not([data-visible]) {\n  opacity: 0;\n}\n\n.media-default-skin media-poster ::slotted(img), .media-default-skin media-poster img {\n  object-fit: var(--media-object-fit, contain);\n  object-position: var(--media-object-position, center);\n  border-radius: var(--media-container-border-radius);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  inset: 0;\n}\n\n.media-default-skin > img {\n  object-fit: var(--media-object-fit, contain);\n  object-position: var(--media-object-position, center);\n  border-radius: inherit;\n}\n\n.media-default-skin:fullscreen media-poster ::slotted(img), .media-default-skin:fullscreen media-poster img, .media-default-skin:fullscreen > img {\n  object-fit: contain;\n}\n\n.media-default-skin .media-thumbnail {\n  pointer-events: none;\n  border-radius: calc(var(--media-spacing) * 3);\n  background-color: oklch(0% 0 0 / .9);\n  position: relative;\n\n  & .media-thumbnail__image {\n    max-width: var(--media-thumbnail-max-width);\n    max-height: var(--media-thumbnail-max-height);\n    border-radius: inherit;\n    display: block;\n    position: relative;\n    overflow: clip;\n\n    &:after {\n      content: \"\";\n      border-radius: inherit;\n      background-image: linear-gradient(to top, oklch(0% 0 0 / .5), oklch(0% 0 0 / .1), oklch(0% 0 0 / 0));\n      position: absolute;\n      inset: 0;\n    }\n  }\n\n  & .media-thumbnail__spinner {\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n  }\n\n  & .media-thumbnail__image, & .media-thumbnail__spinner {\n    transition: opacity .15s ease-out;\n  }\n\n  &:not(:has(.media-thumbnail__image[data-loading])) {\n    & .media-thumbnail__spinner {\n      --media-spinner-animation: none;\n    }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    --media-spinner-animation: none;\n  }\n\n  &:has(.media-thumbnail__image[data-loading]) {\n    width: var(--media-thumbnail-max-width);\n    aspect-ratio: 16 / 9;\n    max-width: 100%;\n    overflow: hidden;\n\n    & .media-thumbnail__image {\n      opacity: 0;\n    }\n\n    & .media-thumbnail__spinner {\n      opacity: 1;\n    }\n  }\n}\n\n.media-default-skin .media-slider {\n  --media-track-size: calc(var(--media-spacing) * 1);\n  --media-track-highlighted-size: calc(var(--media-spacing) * 1.75);\n  --media-track-border-radius: 99px;\n  --media-track-transition-duration: .1s;\n  --media-thumb-size: calc(var(--media-spacing) * 3);\n  --media-chapter-gap: calc(var(--media-spacing) * 1);\n  --media-internal-chapter-inset-start: calc(var(--media-chapter-gap) / 2);\n  --media-internal-chapter-inset-end: calc(var(--media-chapter-gap) / 2);\n  cursor: pointer;\n  outline: none;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: relative;\n\n  &[data-orientation=\"horizontal\"] {\n    width: var(--media-slider-width, 100%);\n    min-width: calc(var(--media-spacing) * 20);\n    height: var(--media-slider-height, calc(var(--media-spacing) * 8));\n  }\n\n  &[data-orientation=\"vertical\"] {\n    width: var(--media-slider-width, calc(var(--media-spacing) * 8));\n    height: var(--media-slider-height, calc(var(--media-spacing) * 20));\n  }\n\n  & .media-slider__track {\n    user-select: none;\n    background-color: oklch(from currentColor l c h / .2);\n    border-radius: var(--media-track-border-radius);\n    isolation: isolate;\n    position: relative;\n    overflow: hidden;\n\n    &[data-orientation=\"horizontal\"] {\n      width: 100%;\n      height: var(--media-track-size);\n    }\n\n    &[data-orientation=\"vertical\"] {\n      width: var(--media-track-size);\n      height: 100%;\n    }\n  }\n\n  & .media-slider__buffer, & .media-slider__fill {\n    pointer-events: none;\n    border-radius: inherit;\n    position: absolute;\n\n    &[data-orientation=\"horizontal\"] {\n      inset-block: 0;\n      width: 100%;\n      left: 0;\n    }\n\n    &[data-orientation=\"vertical\"] {\n      inset-inline: 0;\n      height: 100%;\n      bottom: 0;\n    }\n\n    @media (prefers-reduced-motion: no-preference) {\n      transition: clip-path var(--media-track-transition-duration) ease-out;\n    }\n  }\n\n  &[data-dragging] {\n    & .media-slider__fill, & .media-slider__buffer {\n      transition-duration: 0s;\n    }\n  }\n\n  & .media-slider__buffer {\n    background-color: oklch(from currentColor l c h / .2);\n\n    &[data-orientation=\"horizontal\"] {\n      clip-path: inset(0 calc(100% - var(--media-slider-buffer)) 0 0 round var(--media-track-border-radius));\n    }\n\n    &[data-orientation=\"vertical\"] {\n      clip-path: inset(calc(100% - var(--media-slider-buffer)) 0 0 0 round var(--media-track-border-radius));\n    }\n  }\n\n  & .media-slider__fill {\n    background-color: var(--media-internal-accent-color);\n\n    &[data-orientation=\"horizontal\"] {\n      clip-path: inset(0 calc(100% - var(--media-slider-fill)) 0 0 round var(--media-track-border-radius));\n    }\n\n    &[data-orientation=\"vertical\"] {\n      clip-path: inset(calc(100% - var(--media-slider-fill)) 0 0 0 round var(--media-track-border-radius));\n    }\n  }\n\n  &[data-dragging] {\n    & .media-slider__fill[data-orientation=\"horizontal\"] {\n      clip-path: inset(0 calc(100% - var(--media-slider-pointer)) 0 0 round var(--media-track-border-radius));\n    }\n\n    & .media-slider__fill[data-orientation=\"vertical\"] {\n      clip-path: inset(calc(100% - var(--media-slider-pointer)) 0 0 0 round var(--media-track-border-radius));\n    }\n  }\n\n  & .media-slider__chapters {\n    border-radius: inherit;\n    flex: 1;\n    align-items: center;\n    min-width: 0;\n    min-height: 0;\n    display: flex;\n    position: relative;\n\n    &[data-orientation=\"horizontal\"] {\n      width: 100%;\n      height: 100%;\n    }\n\n    &[data-orientation=\"vertical\"] {\n      flex-direction: column-reverse;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  & .media-slider__chapter {\n    border-radius: inherit;\n    justify-content: center;\n    align-items: center;\n    min-width: 0;\n    min-height: 0;\n    display: flex;\n    position: absolute;\n    inset: 0;\n\n    &:first-child {\n      --media-internal-chapter-inset-start: 0px;\n    }\n\n    &:last-child {\n      --media-internal-chapter-inset-end: 0px;\n    }\n\n    & .media-slider__chapter-track {\n      border-radius: inherit;\n\n      @media (prefers-reduced-motion: no-preference) {\n        transition: height .2s ease-out, width .2s ease-out;\n      }\n    }\n\n    &[data-orientation=\"horizontal\"] {\n      clip-path: inset(0 calc(100% - var(--media-slider-chapter-end)) 0 var(--media-slider-chapter-start));\n\n      & .media-slider__chapter-track {\n        height: var(--media-track-size);\n        clip-path: inset(0 calc(100% - var(--media-slider-chapter-end) + var(--media-internal-chapter-inset-end)) 0\n            calc(var(--media-slider-chapter-start) + var(--media-internal-chapter-inset-start)) round\n            var(--media-track-border-radius));\n      }\n\n      &[data-highlighted] .media-slider__chapter-track {\n        height: var(--media-track-highlighted-size);\n      }\n    }\n\n    &[data-orientation=\"vertical\"] {\n      clip-path: inset(calc(100% - var(--media-slider-chapter-end)) 0 var(--media-slider-chapter-start) 0);\n\n      & .media-slider__chapter-track {\n        width: var(--media-track-size);\n        clip-path: inset(calc(100% - var(--media-slider-chapter-end) + var(--media-internal-chapter-inset-end)) 0\n            calc(var(--media-slider-chapter-start) + var(--media-internal-chapter-inset-start)) 0 round\n            var(--media-track-border-radius));\n      }\n\n      &[data-highlighted] .media-slider__chapter-track {\n        width: var(--media-track-highlighted-size);\n      }\n    }\n  }\n\n  & .media-slider__thumb {\n    z-index: 10;\n    width: var(--media-thumb-size);\n    height: var(--media-thumb-size);\n    user-select: none;\n    outline-offset: -4px;\n    box-shadow: 0 0 0 1px var(--media-shadow-current-color, oklch(0% 0 0 / .1)),\n      0 1px 3px 0 oklch(0% 0 0 / .35),\n      0 1px 2px -1px oklch(0% 0 0 / .35);\n    opacity: 0;\n    background-color: currentColor;\n    border-radius: 3.40282e38px;\n    outline: 4px solid #0000;\n    position: absolute;\n    translate: -50% -50%;\n    scale: .8;\n\n    &[data-orientation=\"horizontal\"] {\n      top: 50%;\n      left: var(--media-slider-fill);\n    }\n\n    &[data-orientation=\"vertical\"] {\n      top: calc(100% - var(--media-slider-fill));\n      left: 50%;\n    }\n\n    &:focus-visible {\n      outline-color: oklch(from currentColor l c h / .15);\n      outline-offset: 0;\n      opacity: 1;\n    }\n\n    &:after {\n      content: \"\";\n      border-radius: inherit;\n      position: absolute;\n      inset: -4px;\n      box-shadow: 0 0 0 2px;\n    }\n\n    &:not(:focus-visible):after {\n      opacity: 0;\n      scale: .5;\n    }\n\n    &.media-slider__thumb--persistent {\n      opacity: 1;\n      scale: 1;\n    }\n\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        outline-color: oklch(from currentColor l c h / .15);\n        outline-offset: 0;\n      }\n    }\n\n    @media (prefers-reduced-motion: no-preference) {\n      transition-timing-function: ease-out;\n      transition-duration: var(--media-track-transition-duration);\n      transition-property: opacity, outline-offset, left, top, scale;\n\n      &:after {\n        transition-property: opacity, scale;\n        transition-duration: .15s;\n        transition-timing-function: ease-out;\n      }\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover .media-slider__thumb {\n      opacity: 1;\n      scale: 1;\n    }\n  }\n\n  &[data-dragging] .media-slider__thumb {\n    opacity: 1;\n    scale: .9;\n\n    @media (prefers-reduced-motion: no-preference) {\n      transition-property: opacity, outline-offset, scale;\n    }\n\n    &[data-orientation=\"horizontal\"] {\n      left: var(--media-slider-pointer);\n    }\n\n    &[data-orientation=\"vertical\"] {\n      top: calc(100% - var(--media-slider-pointer));\n    }\n  }\n\n  & .media-slider__preview {\n    --media-max-size-factor: 36;\n    --media-max-size: min(calc(var(--media-spacing) * var(--media-max-size-factor)), 100cqi);\n    min-width: var(--media-max-size);\n    height: calc(var(--media-spacing) * 1);\n\n    @container media-root (width > 42rem) {\n      --media-max-size-factor: 48;\n    }\n\n    & .media-slider__thumbnail, & .media-slider__value {\n      max-width: var(--media-max-size);\n      opacity: 0;\n      filter: blur(8px);\n      transform-origin: bottom;\n      scale: .8;\n      translate: -50% calc(var(--media-spacing) * 2);\n      transition-duration: .15s;\n      transition-timing-function: ease-out;\n      position: absolute;\n      left: 50%;\n    }\n\n    & .media-slider__thumbnail {\n      --media-thumbnail-max-width: var(--media-max-size);\n      --media-thumbnail-max-height: var(--media-max-size);\n      bottom: calc(100% + (var(--media-spacing) * 9));\n    }\n\n    & .media-slider__value {\n      bottom: calc(100% + (var(--media-spacing) * 10.5));\n      flex-direction: column;\n      align-items: center;\n      display: flex;\n    }\n\n    & .media-slider__chapter-title {\n      min-width: 0;\n      max-width: var(--media-max-size);\n      padding-inline: calc(var(--media-spacing) * 6);\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n\n      &:empty {\n        display: none;\n      }\n    }\n\n    &:before {\n      z-index: 1;\n      width: calc(var(--media-spacing) * 1);\n      height: calc(var(--media-spacing) * 1);\n      pointer-events: none;\n      content: \"\";\n      box-shadow: 0 0 0 1px var(--media-shadow-current-color, oklch(0% 0 0 / .15)),\n        0 1px 2px 0 oklch(0% 0 0 / .35);\n      opacity: 0;\n      background-color: currentColor;\n      border-radius: 100%;\n      transition-property: opacity, scale;\n      transition-duration: .2s;\n      transition-timing-function: ease-out;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      translate: -50% -50%;\n      scale: .5;\n    }\n  }\n\n  &:is([data-pointing], :has(:focus-visible)) .media-slider__preview :is(.media-slider__value, .media-slider__thumbnail), & .media-slider__preview[data-pointing]:not([data-dragging]):before {\n    opacity: 1;\n    filter: blur();\n    scale: 1;\n  }\n}\n\n.media-default-skin {\n  --media-popup-transition: opacity var(--media-popup-transition-timing-function) var(--media-popup-transition-duration),\n    filter var(--media-popup-transition-timing-function) var(--media-popup-transition-duration),\n    transform var(--media-popup-transition-timing-function) var(--media-popup-transition-duration),\n    scale var(--media-popup-transition-timing-function) var(--media-popup-transition-duration);\n}\n\n.media-default-skin .media-popover, .media-default-skin .media-tooltip {\n  --media-popup-translate-distance: calc(.5 * var(--media-internal-scale-unit));\n  color: inherit;\n  transition: var(--media-popup-transition);\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &[data-starting-style], &[data-ending-style] {\n    opacity: 0;\n    filter: blur(4px);\n    transform: translate(var(--media-popup-translate-x-distance, 0), var(--media-popup-translate-y-distance, 0));\n    scale: .95;\n  }\n\n  &[data-ending-style] {\n    transition-duration: max(0s, calc(var(--media-popup-transition-duration) - 50ms));\n    transform: none;\n  }\n\n  &[data-side=\"top\"] {\n    --media-popup-translate-y-distance: var(--media-popup-translate-distance);\n    transform-origin: bottom;\n  }\n\n  &[data-side=\"bottom\"] {\n    --media-popup-translate-y-distance: calc(var(--media-popup-translate-distance) * -1);\n    transform-origin: top;\n  }\n\n  &[data-side=\"left\"] {\n    --media-popup-translate-x-distance: var(--media-popup-translate-distance);\n    transform-origin: 100%;\n  }\n\n  &[data-side=\"right\"] {\n    --media-popup-translate-x-distance: calc(var(--media-popup-translate-distance) * -1);\n    transform-origin: 0;\n  }\n\n  &:before {\n    pointer-events: inherit;\n    content: \"\";\n    position: absolute;\n  }\n\n  &[data-side=\"top\"]:before, &[data-side=\"bottom\"]:before {\n    width: 100%;\n    inset-inline: 0;\n  }\n\n  &[data-side=\"top\"]:before {\n    top: 100%;\n  }\n\n  &[data-side=\"bottom\"]:before {\n    bottom: 100%;\n  }\n\n  &[data-side=\"left\"]:before, &[data-side=\"right\"]:before {\n    height: 100%;\n    inset-block: 0;\n  }\n\n  &[data-side=\"left\"]:before {\n    left: 100%;\n  }\n\n  &[data-side=\"right\"]:before {\n    right: 100%;\n  }\n}\n\n.media-default-skin .media-popover {\n  &[data-side=\"top\"]:before, &[data-side=\"bottom\"]:before {\n    height: var(--media-popover-side-offset);\n  }\n\n  &[data-side=\"left\"]:before, &[data-side=\"right\"]:before {\n    width: var(--media-popover-side-offset);\n  }\n}\n\n.media-default-skin .media-popover--volume {\n  padding: calc(var(--media-spacing) * 3) 0;\n  border-radius: 3.40282e38px;\n\n  &:has(media-volume-slider[data-hidden]) {\n    display: none;\n  }\n}\n\n.media-default-skin .media-tooltip {\n  padding: calc(var(--media-spacing) * 1) calc(var(--media-spacing) * 2.5);\n  font-size: var(--media-font-size-base);\n  white-space: nowrap;\n  border-radius: 3.40282e38px;\n\n  &[data-open] {\n    column-gap: calc(var(--media-spacing) * 1);\n    align-items: center;\n    display: flex;\n  }\n\n  &[data-side=\"top\"]:before, &[data-side=\"bottom\"]:before {\n    height: var(--media-tooltip-side-offset);\n  }\n\n  &[data-side=\"left\"]:before, &[data-side=\"right\"]:before {\n    width: var(--media-tooltip-side-offset);\n  }\n\n  & .media-tooltip__kbd {\n    min-width: 1.5em;\n    font-family: inherit;\n    font-size: var(--media-font-size-small);\n    text-align: center;\n    background-color: oklch(from currentColor l c h / .3);\n    border-radius: calc(var(--media-spacing) * 1);\n    padding: .1em;\n    font-weight: 600;\n    line-height: 1.25;\n  }\n}\n\n.media-default-skin .media-menu {\n  --media-menu-transition-duration: .25s;\n  --media-menu-max-height: calc(var(--media-spacing) * 56);\n  --media-menu-padding: calc(var(--media-spacing) * 1);\n  --media-menu-border-radius: calc(var(--media-spacing) * 3);\n  --media-menu-item-border-radius: calc(var(--media-menu-border-radius) - var(--media-menu-padding));\n  box-sizing: border-box;\n  min-width: max-content;\n  max-width: var(--media-menu-available-width, none);\n  max-height: min(var(--media-menu-available-height, var(--media-menu-max-height)), var(--media-menu-max-height));\n  padding: var(--media-menu-padding);\n  overscroll-behavior: none;\n  border-radius: var(--media-menu-border-radius);\n  overflow: auto;\n\n  @media (prefers-reduced-motion: reduce) {\n    --media-menu-transition-duration: 0s;\n  }\n\n  & > .media-menu__panel {\n    --media-menu-content-enter-translate: 100%;\n    inset-inline: 0;\n    z-index: 10;\n    max-height: inherit;\n    padding: var(--media-menu-padding);\n    overscroll-behavior: none;\n    transition-timing-function: ease-out;\n    transition-duration: var(--media-menu-transition-duration);\n    outline: none;\n    transition-property: translate, filter;\n    position: absolute;\n    top: 0;\n    overflow: auto;\n    translate: 0;\n\n    &:where([data-starting-style], [data-ending-style]) {\n      pointer-events: none;\n      filter: blur(8px);\n      translate: var(--media-menu-content-enter-translate) 0;\n      overflow: hidden;\n    }\n\n    &:dir(rtl):where([data-starting-style], [data-ending-style]) {\n      --media-menu-content-enter-translate: -100%;\n    }\n  }\n\n  & .media-menu__separator {\n    margin-block: calc(var(--media-spacing) * 1);\n    border-bottom: 1px solid oklch(0% 0 0 / .1);\n    box-shadow: 0 1px oklch(100% 0 0 / .075);\n  }\n\n  & .media-menu__content, & .media-menu__group {\n    anchor-scope: --menu-item-highlight-anchor;\n    gap: calc(var(--media-spacing) * .5);\n    flex-direction: column;\n    display: flex;\n\n    @supports (top: anchor(top)) {\n      &:before {\n        position-anchor: --menu-item-highlight-anchor;\n        inset: anchor(inside);\n        overflow-anchor: none;\n        pointer-events: none;\n        content: \"\";\n        background-color: var(--media-accent-background-color);\n        border-radius: var(--media-menu-item-border-radius);\n        transition: inset .1s ease-in-out;\n        position: absolute;\n      }\n\n      &:has([data-highlighted=\"\"]):before {\n        transition-duration: 0s;\n      }\n    }\n  }\n\n  & .media-menu__item, & .media-menu__back {\n    gap: calc(var(--media-spacing) * 1.5);\n    padding: calc(var(--media-spacing) * 1.5) calc(var(--media-spacing) * 2);\n    text-align: start;\n    white-space: nowrap;\n    text-shadow: 0 1px 0 var(--media-shadow-current-color);\n    cursor: pointer;\n    user-select: none;\n    outline-offset: -2px;\n    border-radius: var(--media-menu-item-border-radius);\n    outline: 2px solid #0000;\n    align-items: center;\n    transition: background-color .1s ease-in-out, color .1s ease-in-out;\n    display: flex;\n    position: relative;\n\n    & .media-icon {\n      color: oklch(from currentColor l c h / .65);\n      filter: drop-shadow(0 1px 0 var(--media-shadow-current-color));\n      flex-shrink: 0;\n    }\n\n    &:focus-visible {\n      outline-color: var(--media-focus-ring-color);\n      outline-offset: 2px;\n    }\n\n    &:hover, &[data-highlighted] {\n      color: var(--media-internal-accent-text-color);\n      background-color: var(--media-accent-background-color);\n\n      & .media-icon {\n        color: inherit;\n      }\n    }\n\n    @supports (top: anchor(top)) {\n      transition-duration: 50ms;\n\n      &:hover, &[data-highlighted] {\n        transition-duration: .2s;\n      }\n    }\n  }\n\n  & .media-menu__indicator {\n    margin-inline: auto calc(var(--media-spacing) * -1);\n    opacity: 0;\n    flex-shrink: 0;\n\n    & .media-icon {\n      filter: drop-shadow(0 1px 0 var(--media-shadow-current-color));\n    }\n  }\n\n  & .media-menu__item {\n    font-variant-numeric: tabular-nums;\n    color: inherit;\n    justify-content: space-between;\n\n    &[aria-disabled=\"true\"] {\n      pointer-events: none;\n      cursor: not-allowed;\n      opacity: .5;\n    }\n\n    &[aria-checked=\"true\"] .media-menu__indicator {\n      opacity: 1;\n    }\n\n    &[data-availability=\"unavailable\"], &[data-availability=\"unsupported\"] {\n      display: none;\n    }\n\n    &[data-highlighted] {\n      @supports (top: anchor(top)) {\n        anchor-name: --menu-item-highlight-anchor;\n        background-color: #0000;\n      }\n    }\n  }\n\n  & .media-menu__tier {\n    padding-inline-start: calc(var(--media-spacing) * .5);\n    font-size: var(--media-font-size-tiny);\n    color: oklch(from currentColor l c h / .7);\n    padding-top: 1px;\n    font-weight: 600;\n    line-height: 1;\n  }\n\n  & .media-menu__back {\n    width: 100%;\n    margin-bottom: calc(var(--media-spacing) * .5);\n  }\n\n  & .media-menu__hint {\n    gap: calc(var(--media-spacing) * 1);\n    min-width: 0;\n    color: oklch(from currentColor l c h / .65);\n    align-items: center;\n    margin-inline-start: auto;\n    padding-inline-start: calc(var(--media-spacing) * 2);\n    display: inline-flex;\n  }\n\n  & .media-menu__hint-label {\n    max-width: calc(var(--media-spacing) * 24);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  & .media-menu__chevron {\n    width: calc(var(--media-spacing) * 3.5);\n    height: calc(var(--media-spacing) * 3.5);\n  }\n\n  &.media-menu--settings {\n    width: var(--media-menu-width);\n    min-width: calc(var(--media-spacing) * 44);\n    height: var(--media-menu-height);\n    transition: var(--media-popup-transition),\n      width var(--media-popup-transition-timing-function) var(--media-menu-transition-duration),\n      height var(--media-popup-transition-timing-function) var(--media-menu-transition-duration);\n    overflow: hidden;\n\n    & > .media-menu__content {\n      --media-menu-content-exit-translate: -100%;\n      transition: translate var(--media-menu-transition-duration) ease-out,\n        filter var(--media-menu-transition-duration) ease-out;\n      translate: 0;\n\n      &:dir(rtl) {\n        --media-menu-content-exit-translate: 100%;\n      }\n    }\n\n    & > .media-menu__content[data-child-open] {\n      filter: blur(8px);\n      translate: var(--media-menu-content-exit-translate) 0;\n    }\n\n    & > .media-menu__content[data-child-open]:before, &:has( > .media-menu__panel[data-ending-style]) > .media-menu__content:before {\n      display: none;\n    }\n\n    &[data-starting-style], &[data-ending-style] {\n      transition: var(--media-popup-transition);\n    }\n  }\n}\n\n.media-default-skin {\n  --media-caption-track-duration: var(--media-controls-transition-duration);\n  --media-caption-track-delay: 25ms;\n  --media-caption-track-y: calc(var(--media-spacing) * -2);\n\n  &:has(.media-controls[data-visible]) {\n    --media-caption-track-y: calc(var(--media-spacing) * -14);\n  }\n}\n\n.media-default-skin video::-webkit-media-text-track-container {\n  z-index: 1;\n  scale: .98;\n  translate: 0 var(--media-caption-track-y);\n  transition: translate var(--media-caption-track-duration) ease-out;\n  transition-delay: var(--media-caption-track-delay);\n  font-family: inherit;\n}\n\n.media-default-skin .media-input-indicator {\n  color: oklch(100% 0 0);\n  pointer-events: none;\n  grid-template-columns: 1fr 1fr 1fr;\n  place-items: center;\n  display: grid;\n  position: absolute;\n  inset: 0;\n}\n\n.media-default-skin {\n  & .media-volume-indicator, & .media-status-indicator--state {\n    --media-surface-background-color: oklch(0% 0 0 / .25);\n    top: calc(var(--media-spacing) * 3);\n    color: inherit;\n    pointer-events: none;\n    transform-origin: top;\n    border-radius: 3.40282e38px;\n    font-weight: 500;\n    transition-duration: .1s;\n    transition-timing-function: ease-out;\n    position: absolute;\n\n    & .media-volume-indicator__content, & .media-status-indicator__content {\n      gap: calc(var(--media-spacing) * 2);\n      width: 100%;\n      padding: calc(var(--media-spacing) * 1) calc(var(--media-spacing) * 2.5);\n      justify-content: space-between;\n      align-items: center;\n      display: flex;\n\n      & * {\n        mix-blend-mode: difference;\n      }\n    }\n\n    & .media-icon {\n      flex-shrink: 0;\n      display: none;\n    }\n\n    & .media-volume-indicator__value, & .media-status-indicator__value {\n      margin-left: auto;\n    }\n\n    @media (pointer: coarse) {\n      will-change: scale, translate, opacity;\n      transition-property: scale, translate, opacity;\n    }\n\n    @media (pointer: fine) and (prefers-reduced-motion: no-preference) {\n      will-change: scale, translate, filter, opacity;\n      transition-property: scale, translate, filter, opacity;\n    }\n\n    @media (prefers-reduced-transparency: reduce) or (prefers-contrast: more) {\n      --media-surface-background-color: oklch(0% 0 0);\n    }\n\n    &[data-starting-style], &[data-ending-style] {\n      opacity: 0;\n      transition-duration: .25s;\n      transition-timing-function: ease-in;\n\n      @media (pointer: fine) and (prefers-reduced-motion: no-preference) {\n        filter: blur(8px);\n        scale: .9;\n      }\n    }\n\n    &[data-ending-style] {\n      @media (prefers-reduced-motion: no-preference) {\n        translate: 0 -25%;\n      }\n    }\n  }\n\n  & .media-seek-indicator, & .media-status-indicator--playback {\n    padding: calc(var(--media-spacing) * 4);\n    text-align: center;\n    grid-area: 1 / 2;\n    place-content: center;\n    display: grid;\n  }\n}\n\n.media-default-skin .media-volume-indicator {\n  width: min(80%, calc(var(--media-spacing) * 48));\n  transform: translateX(0);\n\n  & .media-volume-indicator__content {\n    background-image: linear-gradient(currentColor, currentColor);\n    background-position: 0;\n    background-repeat: no-repeat;\n    background-size: var(--media-volume-fill, 0%) 100%;\n    border-radius: inherit;\n    transition: background-size .2s linear;\n  }\n\n  &[data-level=\"high\"] .media-icon--volume-high, &[data-level=\"low\"] .media-icon--volume-low, &[data-level=\"off\"] .media-icon--volume-off {\n    display: block;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    &[data-min]:not([data-starting-style], [data-ending-style]), &[data-max]:not([data-starting-style], [data-ending-style]) {\n      transition: transform .3s linear(0, -24 20%, 16 40%, -8 60%, 4 80%, 1);\n      transform: translateX(.25px);\n    }\n  }\n}\n\n.media-default-skin .media-status-indicator--state {\n  &[data-status=\"captions-on\"] .media-icon--captions-on, &[data-status=\"captions-off\"] .media-icon--captions-off, &[data-status=\"fullscreen\"] .media-icon--fullscreen-enter, &[data-status=\"exit-fullscreen\"] .media-icon--fullscreen-exit, &[data-status=\"pip\"] .media-icon--pip-enter, &[data-status=\"exit-pip\"] .media-icon--pip-exit {\n    display: block;\n  }\n}\n\n.media-default-skin .media-status-indicator--playback {\n  backdrop-filter: blur(8px);\n  background: oklch(0% 0 0 / .35);\n  border-radius: 100%;\n  transition-property: opacity, scale;\n  transition-duration: .2s;\n  transition-timing-function: ease-out;\n\n  & .media-icon {\n    width: calc(var(--media-icon-size) * 1.5);\n    height: calc(var(--media-icon-size) * 1.5);\n    opacity: 0;\n    grid-area: 1 / 1;\n    transition-property: opacity, scale;\n    transition-duration: .15s;\n    transition-timing-function: ease-out;\n    scale: 0;\n\n    &.media-icon--play {\n      translate: 1px;\n    }\n  }\n\n  &[data-status=\"pause\"] .media-icon--pause, &[data-status=\"play\"] .media-icon--play {\n    opacity: 1;\n    scale: 1;\n  }\n\n  &[data-starting-style], &[data-ending-style] {\n    opacity: 0;\n    scale: .85;\n  }\n\n  &[data-ending-style] {\n    transition-duration: .1s;\n    transition-timing-function: ease-in;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    transition-property: opacity;\n    transition-duration: 50ms;\n\n    &[data-starting-style], &[data-ending-style], & .media-icon {\n      scale: 1;\n    }\n\n    & .media-icon {\n      transition-property: opacity;\n      transition-duration: 50ms;\n    }\n  }\n}\n\n.media-default-skin .media-seek-indicator {\n  gap: calc(var(--media-spacing) * 1);\n\n  & .media-seek-indicator__value {\n    font-variant-numeric: tabular-nums;\n  }\n\n  @container media-root (width > 24rem) {\n    padding: calc(var(--media-spacing) * 6);\n  }\n\n  &[data-direction=\"backward\"] {\n    grid-column: 1;\n    justify-self: left;\n  }\n\n  &[data-direction=\"forward\"] {\n    grid-column: 3;\n    justify-self: right;\n  }\n\n  & .media-icon--seek {\n    width: calc(var(--media-icon-size) * 1.5);\n    height: calc(var(--media-icon-size) * 1.5);\n    display: block;\n  }\n\n  &[data-direction=\"backward\"] .media-icon--seek {\n    scale: -1 1;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    & .media-icon--seek {\n      transition-property: translate, opacity;\n      transition-duration: .2s;\n      transition-timing-function: ease-in-out;\n    }\n\n    &[data-starting-style] .media-icon--seek, &[data-ending-style] .media-icon--seek {\n      opacity: 0;\n    }\n\n    &[data-direction=\"forward\"][data-starting-style] .media-icon--seek {\n      translate: -60%;\n    }\n\n    &[data-direction=\"backward\"][data-starting-style] .media-icon--seek {\n      translate: 60%;\n    }\n  }\n}\n\n.media-button--play .media-icon, .media-button--mute .media-icon, .media-button--fullscreen .media-icon, .media-button--pip .media-icon, .media-button--cast .media-icon, .media-button--airplay .media-icon, .media-button--captions .media-icon {\n  opacity: 0;\n}\n\n.media-button--play .media-icon {\n  scale: 0;\n}\n\n.media-button--play[data-ended] .media-icon--restart, .media-button--play:not([data-ended])[data-paused] .media-icon--play, .media-button--play:not([data-ended]):not([data-started]) .media-icon--play, .media-button--play[data-started]:not([data-paused]):not([data-ended]) .media-icon--pause, .media-button--mute[data-muted] .media-icon--volume-off, .media-button--mute:not([data-muted])[data-volume-level=\"low\"] .media-icon--volume-low, .media-button--mute:not([data-muted]):not([data-volume-level=\"low\"]) .media-icon--volume-high, .media-button--fullscreen:not([data-fullscreen]) .media-icon--fullscreen-enter, .media-button--fullscreen[data-fullscreen] .media-icon--fullscreen-exit, .media-button--pip:not([data-pip]) .media-icon--pip-enter, .media-button--pip[data-pip] .media-icon--pip-exit, .media-button--cast:not([data-cast-state=\"connected\"]) .media-icon--cast-enter, .media-button--cast[data-cast-state=\"connected\"] .media-icon--cast-exit, .media-button--airplay:not([data-airplay-state=\"connected\"]) .media-icon--airplay-enter, .media-button--airplay[data-airplay-state=\"connected\"] .media-icon--airplay-exit, .media-button--captions:not([data-active]) .media-icon--captions-off, .media-button--captions[data-active] .media-icon--captions-on {\n  opacity: 1;\n  scale: 1;\n}\n\n.media-button--airplay:not([data-airplay-state=\"connected\"]) {\n  --media-icon-airplay-fill-animation: none;\n  --media-icon-airplay-triangle-animation: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .media-button--airplay {\n    --media-icon--airplay__fill-animation: none;\n    --media-icon--airplay__triangle-animation: none;\n  }\n}\n\n.media-default-skin--video {\n  --media-default-accent-color: oklch(100% 0 0);\n  --media-border-color: light-dark(oklch(0% 0 0 / .1), oklch(100% 0 0 / .15));\n  --media-focus-ring-color: light-dark(oklch(0% 0 0), oklch(100% 0 0));\n  --media-video-border-radius: var(--media-container-border-radius);\n  --media-surface-background-color: oklch(100% 0 0 / .1);\n  --media-surface-inner-border-color: oklch(100% 0 0 / .1);\n  --media-surface-outer-border-color: oklch(0% 0 0 / .1);\n  --media-surface-shadow-color: oklch(0% 0 0 / .15);\n  --media-surface-backdrop-filter: blur(16px) saturate(1.5);\n  --media-controls-transition-duration: .1s;\n  --media-controls-transition-timing-function: ease-out;\n  --media-dialog-transition-duration: .35s;\n  --media-dialog-transition-delay: .1s;\n  --media-dialog-transition-timing-function: ease-out;\n  --media-popup-transition-duration: .1s;\n  --media-popup-transition-timing-function: ease-out;\n  background: oklch(0% 0 0);\n  overflow: clip;\n\n  @media (prefers-reduced-motion: reduce) {\n    --media-dialog-transition-duration: 50ms;\n    --media-dialog-transition-delay: 0s;\n    --media-popup-transition-duration: 0s;\n\n    & .media-dialog__popup {\n      transition-property: opacity;\n      scale: 1;\n    }\n  }\n\n  @media (prefers-reduced-transparency: reduce) or (prefers-contrast: more) {\n    --media-surface-background-color: oklch(0% 0 0);\n    --media-surface-inner-border-color: oklch(100% 0 0 / .25);\n    --media-surface-outer-border-color: transparent;\n  }\n\n  &:has(.media-controls--root:not([data-visible])) {\n    @media (pointer: fine) {\n      --media-controls-transition-duration: .3s;\n    }\n\n    @media (pointer: coarse) {\n      --media-controls-transition-duration: .15s;\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      --media-controls-transition-duration: 50ms;\n    }\n  }\n\n  &:after {\n    z-index: 10;\n    pointer-events: none;\n    content: \"\";\n    border-radius: inherit;\n    box-shadow: inset 0 0 0 1px var(--media-border-color);\n    position: absolute;\n    inset: 0;\n  }\n\n  &:fullscreen {\n    --media-container-border-radius: 0;\n\n    &:after {\n      display: none;\n    }\n\n    @media (width >= 1280px) {\n      --media-scale: 1.25;\n    }\n\n    @media (width >= 1536px) {\n      --media-scale: 1.5;\n    }\n\n    @media (width >= 1920px) {\n      --media-scale: 1.75;\n    }\n  }\n\n  & * {\n    --media-focus-ring-color: oklch(100% 0 0);\n  }\n}\n\n.media-default-skin--video .media-dialog__popup {\n  z-index: 20;\n  gap: calc(var(--media-spacing) * 3);\n  width: 100%;\n  max-width: calc(var(--media-spacing) * 72);\n  padding: calc(var(--media-spacing) * 3);\n  color: oklch(100% 0 0);\n  text-shadow: 0 1px oklch(0% 0 0 / .25);\n  border-radius: calc(var(--media-spacing) * 7);\n  transition-delay: var(--media-dialog-transition-delay);\n  transition-timing-function: var(--media-dialog-transition-timing-function);\n  transition-duration: var(--media-dialog-transition-duration);\n  flex-direction: column;\n  transition-property: opacity, scale;\n  display: flex;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n}\n\n.media-default-skin--video .media-dialog__popup[data-starting-style], .media-default-skin--video .media-dialog__popup[data-ending-style], .media-default-skin--video media-error-dialog[data-starting-style] .media-dialog__popup, .media-default-skin--video media-error-dialog[data-ending-style] .media-dialog__popup {\n  opacity: 0;\n  scale: .95;\n}\n\n.media-default-skin--video .media-dialog__popup[data-ending-style], .media-default-skin--video media-error-dialog[data-ending-style] .media-dialog__popup {\n  transition-delay: 0s;\n}\n\n.media-default-skin--video .media-dialog__content {\n  gap: calc(var(--media-spacing) * 2);\n  padding: calc(var(--media-spacing) * 2) calc(var(--media-spacing) * 2) calc(var(--media-spacing) * 1.5);\n  text-shadow: inherit;\n  flex-direction: column;\n  display: flex;\n}\n\n.media-default-skin--video .media-dialog__title {\n  font-size: var(--media-font-size-medium);\n}\n\n.media-default-skin--video .media-slider__value {\n  text-shadow: 0 1px 0 var(--media-shadow-current-color);\n}\n\n.media-default-skin--video .media-controls--root {\n  --media-inset-factor: 2;\n  --media-inset: calc(var(--media-spacing) * var(--media-inset-factor));\n  --media-base-boundary-offset: var(--media-inset-factor);\n  z-index: 10;\n  color: oklch(100% 0 0);\n  transition-timing-function: var(--media-controls-transition-timing-function);\n  transition-duration: calc(var(--media-controls-transition-duration) / 2);\n  display: contents;\n\n  & .media-controls--primary, & .media-controls--secondary {\n    position: absolute;\n  }\n\n  & .media-controls--primary {\n    z-index: 20;\n  }\n\n  & .media-controls--secondary {\n    z-index: 10;\n  }\n\n  & .media-controls--primary {\n    inset-inline: var(--media-inset);\n    bottom: var(--media-inset);\n    transform-origin: bottom;\n  }\n\n  & .media-controls--secondary {\n    top: var(--media-inset);\n    right: var(--media-inset);\n    transform-origin: top;\n    container-type: normal;\n  }\n\n  & .media-time-controls {\n    padding-inline: calc(var(--media-spacing) * 2);\n    flex: 1;\n  }\n\n  @container media-root (width < 32rem) {\n    & .media-controls--primary, & .media-controls--secondary {\n      transition-timing-function: inherit;\n      transition-duration: inherit;\n\n      @media (pointer: fine) {\n        transition-property: filter, opacity, scale, translate;\n      }\n\n      @media (pointer: coarse) {\n        transition-property: opacity, scale, translate;\n      }\n    }\n\n    &:after {\n      display: none;\n    }\n\n    &:not([data-visible]) {\n      & .media-controls--primary, & .media-controls--secondary {\n        pointer-events: none;\n        opacity: 0;\n        transition-duration: var(--media-controls-transition-duration);\n        scale: .95;\n\n        @media (pointer: fine) and (prefers-reduced-motion: no-preference) {\n          filter: blur(8px);\n        }\n\n        @media (prefers-reduced-motion: reduce) {\n          scale: 1;\n        }\n      }\n\n      & .media-controls--primary {\n        @media (prefers-reduced-motion: no-preference) {\n          translate: 0 4px;\n        }\n      }\n\n      & .media-controls--secondary {\n        @media (prefers-reduced-motion: no-preference) {\n          translate: 0 -4px;\n        }\n      }\n    }\n\n    & .media-button--captions {\n      display: none;\n    }\n  }\n\n  @container media-root (width >= 32rem) {\n    inset-inline: var(--media-inset);\n    bottom: var(--media-inset);\n    transform-origin: bottom;\n    display: flex;\n    position: absolute;\n\n    & .media-controls--primary, & .media-controls--secondary {\n      display: contents;\n\n      &:after {\n        display: none;\n      }\n    }\n\n    &:not([data-visible]) {\n      pointer-events: none;\n      opacity: 0;\n      transition-duration: var(--media-controls-transition-duration);\n      scale: .95;\n\n      @media (pointer: fine) and (prefers-reduced-motion: no-preference) {\n        filter: blur(8px);\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        scale: 1;\n      }\n\n      @media (prefers-reduced-motion: no-preference) {\n        translate: 0 4px;\n      }\n    }\n\n    & .media-time-controls {\n      padding-inline: calc(var(--media-spacing) * 3);\n    }\n  }\n\n  @media (pointer: fine) {\n    transition-property: filter, opacity, scale, translate;\n  }\n\n  @media (pointer: coarse) {\n    transition-property: opacity, scale, translate;\n  }\n\n  @container media-root (width > 42rem) {\n    --media-inset-factor: 3;\n  }\n}\n\n.media-default-skin--video:has(.media-controls--root:not([data-visible])) {\n  cursor: none;\n}\n\n.media-default-skin--video .media-slider__track {\n  background-color: oklch(100% 0 0 / .2);\n}\n";

//#endregion
//#region src/presets/video/skin.ts
function getTemplateHTML() {
	return `
    <media-container class="media-default-skin media-default-skin--video">
      <!-- @deprecated slot="media" is no longer required, use the default slot instead -->
      <slot name="media"></slot>
      <slot></slot>

      <media-poster>
        <slot name="poster">
          <img alt="" decoding="async">
        </slot>
      </media-poster>

      <media-buffering-indicator class="media-buffering-indicator">
        ${renderIcon("spinner", { class: "media-icon" })}
      </media-buffering-indicator>

      <media-error-dialog>
        <media-dialog-backdrop class="media-dialog__backdrop"></media-dialog-backdrop>
        <media-dialog-popup class="media-dialog__popup media-surface">
          <div class="media-dialog__content">
            <media-dialog-title class="media-dialog__title"></media-dialog-title>
            <media-dialog-description class="media-dialog__description"></media-dialog-description>
          </div>
          <div class="media-dialog__actions">
            <media-dialog-close class="media-button media-button--primary"></media-dialog-close>
          </div>
        </media-dialog-popup>
      </media-error-dialog>

      <media-controls>
        <media-controls-backdrop class="media-controls__backdrop"></media-controls-backdrop>
        <media-controls-content class="media-surface media-controls media-controls--root">
          <media-tooltip-group>
            <media-controls-group class="media-surface media-controls media-controls--primary">
              <div class="media-button-group">
                <media-play-button commandfor="play-tooltip" class="media-button media-button--subtle media-button--icon media-button--play">
                  ${renderIcon("restart", { class: "media-icon media-icon--restart" })}
                  ${renderIcon("play", { class: "media-icon media-icon--play" })}
                  ${renderIcon("pause", { class: "media-icon media-icon--pause" })}
                </media-play-button>
                <media-tooltip id="play-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>

                <media-mute-button commandfor="video-volume-popover" class="media-button media-button--subtle media-button--icon media-button--mute">
                  ${renderIcon("volume-off", { class: "media-icon media-icon--volume-off" })}
                  ${renderIcon("volume-low", { class: "media-icon media-icon--volume-low" })}
                  ${renderIcon("volume-high", { class: "media-icon media-icon--volume-high" })}
                </media-mute-button>

                <media-popover id="video-volume-popover" open-on-hover delay="200" close-delay="100" side="top" class="media-surface media-popover media-popover--volume">
                  <media-volume-slider class="media-slider" orientation="vertical" thumb-alignment="edge">
                    <media-slider-track class="media-slider__track">
                      <media-slider-fill class="media-slider__fill"></media-slider-fill>
                    </media-slider-track>
                    <media-slider-thumb class="media-slider__thumb media-slider__thumb--persistent"></media-slider-thumb>
                  </media-volume-slider>
                </media-popover>
              </div>

              <div class="media-time-controls">
                <media-time type="current" class="media-time"></media-time>
                <media-time-slider class="media-slider">
                  <media-time-slider-chapters class="media-slider__chapters">
                    <template>
                      <div class="media-slider__chapter">
                        <media-slider-track class="media-slider__track media-slider__chapter-track">
                          <media-slider-buffer class="media-slider__buffer"></media-slider-buffer>
                          <media-slider-fill class="media-slider__fill"></media-slider-fill>
                        </media-slider-track>
                      </div>
                    </template>
                  </media-time-slider-chapters>
                  <media-slider-thumb class="media-slider__thumb"></media-slider-thumb>

                  <media-slider-preview overflow="visible" class="media-slider__preview">
                    <div class="media-surface media-thumbnail media-slider__thumbnail">
                      <media-slider-thumbnail class="media-thumbnail__image"></media-slider-thumbnail>
                      ${renderIcon("spinner", { class: "media-thumbnail__spinner media-icon" })}
                    </div>
                    <div class="media-slider__value">
                      <media-time-slider-chapter-title class="media-slider__chapter-title"></media-time-slider-chapter-title>
                      <media-slider-value type="pointer" class="media-time"></media-slider-value>
                    </div>
                  </media-slider-preview>
                </media-time-slider>
                <media-time toggle type="remaining" class="media-time"></media-time>
              </div>

              <div class="media-button-group">
                <media-captions-button commandfor="captions-tooltip" class="media-button media-button--subtle media-button--icon media-button--captions">
                  ${renderIcon("captions-off", { class: "media-icon media-icon--captions-off" })}
                  ${renderIcon("captions-on", { class: "media-icon media-icon--captions-on" })}
                </media-captions-button>
                <media-tooltip id="captions-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>

                <button id="settings-trigger" commandfor="settings-menu" aria-labelledby="settings-label" class="media-button media-button--subtle media-button--icon media-button--settings">
                  ${renderIcon("gear", { class: "media-icon media-icon--settings" })}
                  ${renderText(settingsText, {
		id: "settings-label",
		class: "media-sr-only"
	})}
                </button>
                <media-menu id="settings-menu" side="top" align="center" class="media-surface media-popover media-menu media-menu--settings">
                  <media-menu-content class="media-menu__content">
                    <media-menu-item commandfor="settings-quality-menu" class="media-menu__item media-menu__item--submenu">
                      ${renderIcon("switches", { class: "media-icon" })}
                      ${renderText(qualityText)}
                      <span class="media-menu__hint">
                        <bdi data-part="hint" dir="auto" class="media-menu__hint-label"></bdi>
                        ${renderIcon("chevron", { class: "media-icon media-menu__chevron" })}
                      </span>
                    </media-menu-item>
                    <media-menu-item commandfor="settings-audio-menu" class="media-menu__item media-menu__item--submenu">
                      ${renderIcon("speech", { class: "media-icon" })}
                      ${renderText(audioText)}
                      <span class="media-menu__hint">
                        <bdi data-part="hint" dir="auto" class="media-menu__hint-label"></bdi>
                        ${renderIcon("chevron", { class: "media-icon media-menu__chevron" })}
                      </span>
                    </media-menu-item>
                    <media-menu-item commandfor="settings-speed-menu" class="media-menu__item media-menu__item--submenu">
                      ${renderIcon("speed", { class: "media-icon" })}
                      ${renderText(speedText)}
                      <span class="media-menu__hint">
                        <bdi data-part="hint" dir="auto" class="media-menu__hint-label"></bdi>
                        ${renderIcon("chevron", { class: "media-icon media-menu__chevron" })}
                      </span>
                    </media-menu-item>
                    <media-menu-item commandfor="settings-captions-menu" class="media-menu__item media-menu__item--submenu">
                      ${renderIcon("captions-off", { class: "media-icon" })}
                      ${renderText(captionsText)}
                      <span class="media-menu__hint">
                        <bdi data-part="hint" dir="auto" class="media-menu__hint-label"></bdi>
                        ${renderIcon("chevron", { class: "media-icon media-menu__chevron" })}
                      </span>
                    </media-menu-item>
                  </media-menu-content>
                  <media-menu-content id="settings-quality-menu" class="media-menu__panel">
                    <media-menu-item class="media-menu__back">
                      ${renderIcon("chevron", { class: "media-icon media-menu__chevron media-icon--flipped" })}
                      ${renderText(qualityText)}
                    </media-menu-item>
                    <div class="media-menu__separator"></div>
                    <media-quality-radio-group class="media-menu__group">
                      <template>
                        <media-menu-radio-item class="media-menu__item">
                          <span>
                            <bdi data-part="label" dir="auto"></bdi>
                            <sup data-part="tier" class="media-menu__tier"></sup>
                          </span>
                          <span data-part="badge" class="media-badge"></span>
                          <media-menu-item-indicator force-mount class="media-menu__indicator">
                            ${renderIcon("check", { class: "media-icon" })}
                          </media-menu-item-indicator>
                        </media-menu-radio-item>
                      </template>
                    </media-quality-radio-group>
                  </media-menu-content>
                  <media-menu-content id="settings-audio-menu" class="media-menu__panel">
                    <media-menu-item class="media-menu__back">
                      ${renderIcon("chevron", { class: "media-icon media-menu__chevron media-icon--flipped" })}
                      ${renderText(audioText)}
                    </media-menu-item>
                    <div class="media-menu__separator"></div>
                    <media-audio-track-radio-group class="media-menu__group">
                      <template>
                        <media-menu-radio-item class="media-menu__item">
                          <bdi data-part="label" dir="auto"></bdi>
                          <media-menu-item-indicator force-mount class="media-menu__indicator">
                            ${renderIcon("check", { class: "media-icon" })}
                          </media-menu-item-indicator>
                        </media-menu-radio-item>
                      </template>
                    </media-audio-track-radio-group>
                  </media-menu-content>
                  <media-menu-content id="settings-speed-menu" class="media-menu__panel">
                    <media-menu-item class="media-menu__back">
                      ${renderIcon("chevron", { class: "media-icon media-menu__chevron media-icon--flipped" })}
                      ${renderText(speedText)}
                    </media-menu-item>
                    <div class="media-menu__separator"></div>
                    <media-playback-rate-radio-group class="media-menu__group">
                      <template>
                        <media-menu-radio-item class="media-menu__item">
                          <bdi data-part="label" dir="auto"></bdi>
                          <media-menu-item-indicator force-mount class="media-menu__indicator">
                            ${renderIcon("check", { class: "media-icon" })}
                          </media-menu-item-indicator>
                        </media-menu-radio-item>
                      </template>
                    </media-playback-rate-radio-group>
                  </media-menu-content>
                  <media-menu-content id="settings-captions-menu" class="media-menu__panel">
                    <media-menu-item class="media-menu__back">
                      ${renderIcon("chevron", { class: "media-icon media-menu__chevron media-icon--flipped" })}
                      ${renderText(captionsText)}
                    </media-menu-item>
                    <div class="media-menu__separator"></div>
                    <media-captions-radio-group class="media-menu__group">
                      <template>
                        <media-menu-radio-item class="media-menu__item">
                          <bdi data-part="label" dir="auto"></bdi>
                          <media-menu-item-indicator force-mount class="media-menu__indicator">
                            ${renderIcon("check", { class: "media-icon" })}
                          </media-menu-item-indicator>
                        </media-menu-radio-item>
                      </template>
                    </media-captions-radio-group>
                  </media-menu-content>
                </media-menu>
                <media-tooltip id="settings-tooltip" trigger="settings-trigger" side="top" class="media-surface media-tooltip">
                  ${renderText(settingsText)}
                </media-tooltip>
              </div>
            </media-controls-group>

            <media-controls-group class="media-surface media-controls media-controls--secondary">
              <div class="media-button-group">
                <media-cast-button commandfor="cast-tooltip" class="media-button media-button--subtle media-button--icon media-button--cast">
                  ${renderIcon("cast-enter", { class: "media-icon media-icon--cast-enter" })}
                  ${renderIcon("cast-exit", { class: "media-icon media-icon--cast-exit" })}
                </media-cast-button>
                <media-tooltip id="cast-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>

                <media-airplay-button commandfor="airplay-tooltip" class="media-button media-button--subtle media-button--icon media-button--airplay">
                  ${renderIcon("airplay-enter", { class: "media-icon media-icon--airplay-enter" })}
                  ${renderIcon("airplay-exit", { class: "media-icon media-icon--airplay-exit" })}
                </media-airplay-button>
                <media-tooltip id="airplay-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>

                <media-pip-button commandfor="pip-tooltip" class="media-button media-button--subtle media-button--icon media-button--pip">
                  ${renderIcon("pip-enter", { class: "media-icon media-icon--pip-enter" })}
                  ${renderIcon("pip-exit", { class: "media-icon media-icon--pip-exit" })}
                </media-pip-button>
                <media-tooltip id="pip-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>

                <media-fullscreen-button commandfor="fullscreen-tooltip" class="media-button media-button--subtle media-button--icon media-button--fullscreen">
                  ${renderIcon("fullscreen-enter", { class: "media-icon media-icon--fullscreen-enter" })}
                  ${renderIcon("fullscreen-exit", { class: "media-icon media-icon--fullscreen-exit" })}
                </media-fullscreen-button>
                <media-tooltip id="fullscreen-tooltip" side="top" class="media-surface media-tooltip">
                  <media-tooltip-label></media-tooltip-label>
                  <media-tooltip-shortcut class="media-tooltip__kbd"></media-tooltip-shortcut>
                </media-tooltip>
              </div>
            </media-controls-group>
          </media-tooltip-group>
        </media-controls-content>
      </media-controls>

      <!-- Hotkeys -->
      <media-hotkey keys="Space" action="togglePaused"></media-hotkey>
      <media-hotkey keys="k" action="togglePaused"></media-hotkey>
      <media-hotkey keys="m" action="toggleMuted"></media-hotkey>
      <media-hotkey keys="f" action="toggleFullscreen"></media-hotkey>
      <media-hotkey keys="c" action="toggleSubtitles"></media-hotkey>
      <media-hotkey keys="i" action="togglePictureInPicture"></media-hotkey>
      <media-hotkey keys="ArrowRight" action="seekStep" value="5"></media-hotkey>
      <media-hotkey keys="ArrowLeft" action="seekStep" value="-5"></media-hotkey>
      <media-hotkey keys="l" action="seekStep" value="10"></media-hotkey>
      <media-hotkey keys="j" action="seekStep" value="-10"></media-hotkey>
      <media-hotkey keys="ArrowUp" action="volumeStep" value="0.05"></media-hotkey>
      <media-hotkey keys="ArrowDown" action="volumeStep" value="-0.05"></media-hotkey>
      <media-hotkey keys="0-9" action="seekToPercent"></media-hotkey>
      <media-hotkey keys="Home" action="seekToPercent" value="0"></media-hotkey>
      <media-hotkey keys="End" action="seekToPercent" value="100"></media-hotkey>
      <media-hotkey keys=">" action="speedUp"></media-hotkey>
      <media-hotkey keys="<" action="speedDown"></media-hotkey>

      <!-- Gestures -->
      <media-gesture type="tap" action="togglePaused" pointer="mouse" region="center"></media-gesture>
      <media-gesture type="tap" action="toggleControls" pointer="touch"></media-gesture>
      <media-gesture type="doubletap" action="seekStep" value="-10" region="left"></media-gesture>
      <media-gesture type="doubletap" action="toggleFullscreen" region="center"></media-gesture>
      <media-gesture type="doubletap" action="seekStep" value="10" region="right"></media-gesture>

      <!-- Input Indicators -->
      <media-status-announcer class="media-sr-only"></media-status-announcer>
      <div class="media-input-indicator">
        <media-volume-indicator hidden class="media-surface media-volume-indicator">
          <media-volume-indicator-fill class="media-volume-indicator__content">
            ${renderIcon("volume-high", { class: "media-icon media-icon--volume-high" })}
            ${renderIcon("volume-low", { class: "media-icon media-icon--volume-low" })}
            ${renderIcon("volume-off", { class: "media-icon media-icon--volume-off" })}
            <media-volume-indicator-value class="media-volume-indicator__value"></media-volume-indicator-value>
          </media-volume-indicator-fill>
        </media-volume-indicator>
        <media-status-indicator
          hidden
          actions="toggleSubtitles toggleFullscreen togglePictureInPicture"
          class="media-surface media-status-indicator media-status-indicator--state"
        >
          <div class="media-status-indicator__content">
            ${renderIcon("captions-on", { class: "media-icon media-icon--captions-on" })}
            ${renderIcon("captions-off", { class: "media-icon media-icon--captions-off" })}
            ${renderIcon("fullscreen-enter", { class: "media-icon media-icon--fullscreen-enter" })}
            ${renderIcon("fullscreen-exit", { class: "media-icon media-icon--fullscreen-exit" })}
            ${renderIcon("pip-enter", { class: "media-icon media-icon--pip-enter" })}
            ${renderIcon("pip-exit", { class: "media-icon media-icon--pip-exit" })}
            <media-status-indicator-value class="media-status-indicator__value"></media-status-indicator-value>
          </div>
        </media-status-indicator>
        <media-seek-indicator hidden class="media-seek-indicator">
          ${renderIcon("chevron", { class: "media-icon media-icon--seek" })}
          <media-seek-indicator-value class="media-seek-indicator__value"></media-seek-indicator-value>
        </media-seek-indicator>
        <media-status-indicator hidden actions="togglePaused" class="media-status-indicator media-status-indicator--playback">
          ${renderIcon("play", { class: "media-icon media-icon--play" })}
          ${renderIcon("pause", { class: "media-icon media-icon--pause" })}
        </media-status-indicator>
      </div>
    </media-container>
  `;
}
/**
* Packaged default video UI registered as `<video-skin>`.
*
* The shadow template includes `<media-container>`, controls, and styles. Place the media element in the default slot.
*
* @see {@link https://videojs.org/docs/framework/html/how-to/customize-skins | Customize skins}
*/
var VideoSkinElement = class extends SkinElement {
	static {
		this.tagName = "video-skin";
	}
	static {
		this.styles = createShadowStyle(skin_default);
	}
	static {
		this.template = createTemplate(getTemplateHTML());
	}
};

//#endregion
//#region src/define/video/ui.ts
safeDefine(ContainerElement);
safeDefine(I18nProviderElement);
defineControls();
defineErrorDialog();
defineInputIndicators();
defineSliders();
safeDefine(TimeSliderChaptersElement);
safeDefine(TimeSliderChapterTitleElement);
defineTime();
defineMenu();
defineTooltip();
safeDefine(AirPlayButtonElement);
safeDefine(AudioTrackRadioGroupElement);
safeDefine(BufferingIndicatorElement);
safeDefine(CaptionsButtonElement);
safeDefine(CastButtonElement);
safeDefine(FullscreenButtonElement);
safeDefine(GestureElement);
safeDefine(HotkeyElement);
safeDefine(LiveButtonElement);
safeDefine(MuteButtonElement);
safeDefine(PiPButtonElement);
safeDefine(PlayButtonElement);
safeDefine(PlaybackRateButtonElement);
safeDefine(PlaybackRateRadioGroupElement);
safeDefine(CaptionsRadioGroupElement);
safeDefine(PopoverElement);
safeDefine(PosterElement);
safeDefine(QualityRadioGroupElement);
safeDefine(SeekButtonElement);
safeDefine(TextElement);

//#endregion
//#region src/define/video/skin.ts
safeDefine(VideoSkinElement);

//#endregion
//# sourceMappingURL=video.dev.js.map