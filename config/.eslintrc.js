module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@fal-works/p5js",
    "@fal-works/p5js/sound",
    "prettier",
  ],
  globals: {
    fxhash: true,
    fxrand: true,
    fxpreview: true,
    isFxpreview: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-constant-condition": ["error", { checkLoops: false }],
  },
};
