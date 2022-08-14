declare const fxhash: string;
declare const fxrand: () => number;
declare const fxpreview: () => void;
declare const isFxpreview: boolean;

interface Window {
  $fxhashFeatures?: unknown;
}
