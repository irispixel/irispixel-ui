// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Attach the current node to the parentElement and removes the node when getting destroyed.
function doPortal(el: HTMLElement, parentEl: HTMLElement) {
  parentEl.appendChild(el);
  return {
    destroy() {
      el.remove();
    }
  };
}

// Svelte Action to implement portal functionality by appending to element of id as `elementID`.
function portal(el: HTMLElement, target: string | HTMLElement) {
  let finalTarget: HTMLElement | null = null;
  if (target === undefined || target === null) {
    finalTarget = null;
  } else if (typeof target === 'string') {
    finalTarget = document.getElementById(target);
  } else if (target instanceof HTMLElement) {
    finalTarget = target;
  } else {
    throw new TypeError(`Portal target type not supported`);
  }
  return finalTarget !== undefined && finalTarget !== null
    ? doPortal(el, finalTarget)
    : doPortal(el, document.body);
}

// Svelte Action to implement portal functionality by appending to document body
function portalToBody(el: HTMLElement) {
  return doPortal(el, document.body);
}

export { portal, portalToBody };
