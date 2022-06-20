// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export function clickOutside(el: HTMLElement) {
  if (typeof window === 'undefined') {
    return;
  }
  const handleClick = (event: MouseEvent) => {
    if (event.defaultPrevented) {
      return; // do nothing since e.preventDefault() is probably set
    }
    if (!el) {
      return; // no element do nothing
    }
    if (!(event.target instanceof Element)) {
      return; // event target not an Element which is odd because it should be an Element.
    } else if (el.contains(event.target)) {
      // The current element or one of its children is the target of click.
      // So it is not a "click outside" then.
      return;
    }
    el.dispatchEvent(new CustomEvent('outclick'));
  };
  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}
