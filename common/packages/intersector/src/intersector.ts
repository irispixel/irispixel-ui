// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// FnIntersect represents a function type to handle the rectangle being intersected
export type FnIntersect = (rect: DOMRectReadOnly) => void;

function initObserver(el: HTMLElement, onIntersect: FnIntersect): IntersectionObserver {
  const config = {
    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    rootMargin: '0px',
    threshold: 0.1
  };
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect(entry.boundingClientRect);
      }
    });
  }, config);
}

function observe_element(el: HTMLElement, fnIntersect: FnIntersect) {
  const observer = initObserver(el, fnIntersect);
  observer.observe(el);
  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export { observe_element };
