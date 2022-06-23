// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * IntersectionObserverOptions specifies the options passed to IntersectionObserver API.
 *
 * For more details - refer to https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export type IntersectionObserverOptions = {
  root: Element | Document | null;
  rootMargin: string;
  threshold: number;
};

function doInitObserver(
  el: HTMLElement,
  config: IntersectionObserverOptions
): IntersectionObserver {
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
  const config = {
    root: null, // 'null' - default viewport  . default value
    rootMargin: '0px', // default value
    threshold: 0.1 // default value is 0. Here we are setting to 0.1 .
  };
  return observe_with_options(el, config);
}

function observe_with_options(el: HTMLElement, config: IntersectionObserverOptions) {
  const observer = doInitObserver(el, config);
  observer.observe(el);
  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export { observe, observe_with_options };
