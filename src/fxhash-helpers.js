let _ul = 1;

const _updateUl = (w, h) => {
  _ul = min(w, h) / 1000;
};

const _updateDefaultStyle = () => {
  strokeWeight(ul2px(1));
  textSize(ul2px(12));
  textLeading(ul2px(15));
};

const _onResize = (w, h) => {
  _updateUl(w, h);
  _updateDefaultStyle();
};

export const ul2px = (x) => {
  return x * _ul;
};

export const init = (fxrand) => {
  createCanvas(windowWidth, windowHeight);
  randomSeed(fxrand() * 100000);
  noiseSeed(fxrand() * 100000);
  _onResize(width, height);
};

export const resize = () => {
  resizeCanvas(windowWidth, windowHeight);
  _onResize(width, height);
};
