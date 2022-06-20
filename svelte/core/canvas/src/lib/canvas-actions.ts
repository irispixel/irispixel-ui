// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function context2D(el: HTMLCanvasElement) {
  if (el.getContext) {
    const ctx = el.getContext('2d');
    el.dispatchEvent(
      new CustomEvent('newcontext', {
        detail: {
          hello: 'world'
        }
      })
    );
  }
}

export { context2D };
