/// <reference types="p5/global" />
/// <reference path="../fxhash.d.ts" />
import "p5";
import { init, resize, ul2px } from "./fxhash-helpers";

const setup = () => {
  init(fxrand);
};

const draw = () => {
  background(0);
  fill(255);
  textSize(ul2px(24));
  textAlign(CENTER, CENTER);
  text(fxhash, width / 2, height / 2);
};

const windowResized = () => {
  resize();
};

Object.assign(window, { setup, draw, windowResized });
