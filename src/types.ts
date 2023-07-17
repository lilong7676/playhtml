import {
  ClickElement,
  DrawElement,
  GrowElement,
  MoveElement,
  SpinElement,
} from "./elements";

export type Position = { x: number; y: number };
export type MoveData = {
  x: number;
  y: number;
  startMouseX: number;
  startMouseY: number;
};
export type SpinData = {
  rotation: number;
  startMouseX: number;
};
export type GrowData = {
  scale: number;
  maxScale: number;
  isHovering: boolean;
};

export interface TagTypeToElement {
  [TagType.CanPlay]: Element;
  [TagType.CanMove]: MoveElement;
  [TagType.CanSpin]: SpinElement;
  [TagType.CanGrow]: GrowElement;
  // [TagType.CanDraw]: DrawElement;
  // [TagType.CanBounce]: BounceElement;
  [TagType.CanToggle]: ClickElement;
}

// Supported Tags
export enum TagType {
  "CanPlay" = "can-play",
  "CanMove" = "can-move",
  "CanSpin" = "can-spin",
  "CanGrow" = "can-grow",
  "CanToggle" = "can-toggle",
  // "CanDraw" = "can-draw",
  // "CanBounce" = "can-bounce",
  // "CanHover" = "can-hover",
  // "CanDrive" = "can-drive",
  // "CanHighlight" = "can-highlight",
  // "CanStamp" = "can-stamp",

  // "CanFall" = "can-fall", See https://mrdoob.com/projects/chromeexperiments/google-space/
  // "CanAge" = "can-age",
  // "CanFingerprint" = "can-fingerprint",
  // "CanTake" = "can-take",
  // "CanPlace" = "can-place",
  // "CanBreak" = "can-break",
  // "CanUse" = "can-use",
  // A BUNCH FROM Copilot completions
  // "CanOpen" = "can-open",
  // "CanClose" = "can-close",
  // "CanChat" = "can-chat",
  // "CanRead" = "can-read",
  // "CanWrite" = "can-write",
  // "CanEat" = "can-eat",
  // "CanDrink" = "can-drink",
  // "CanWear" = "can-wear",
  // "CanWield" = "can-wield",
  // "CanTalk" = "can-talk",
  // "CanListen" = "can-listen",
  // "CanLook" = "can-look",
  // "CanSmell" = "can-smell",
  // "CanTaste" = "can-taste",
  // "CanFeel" = "can-feel",
  // "CanThink" = "can-think",
  // "CanSleep" = "can-sleep",
  // "CanWake" = "can-wake",
  // "CanBreathe" = "can-breathe",
}
