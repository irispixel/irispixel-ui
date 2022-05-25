// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

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
