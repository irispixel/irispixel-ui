// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function initObserver(el: HTMLElement): IntersectionObserver {
  const config = {
    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    rootMargin: '0px',
    threshold: 0.1
  };
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.dispatchEvent(
          new CustomEvent('intersect', {
            detail: {
              entry: entry
            }
          })
        );
      }
    });
  }, config);
}

function observe(el: HTMLElement) {
  const observer = initObserver(el);
  observer.observe(el);
  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export { observe };
