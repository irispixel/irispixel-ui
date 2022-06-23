// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function initResizer(el: HTMLElement): ResizeObserver {
  return new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      el.dispatchEvent(
        new CustomEvent('resize', {
          detail: {
            entry: entry
          }
        })
      );
    });
  });
}

function resize(el: HTMLElement) {
  const resizer = initResizer(el);
  resizer.observe(el);
  return {
    destroy() {
      resizer.disconnect();
    }
  };
}

export { resize };
