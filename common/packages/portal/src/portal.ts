// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Attach the current node to the parentElement and removes the node when getting destroyed.
export function doPortal(el: HTMLElement, parentEl: HTMLElement) {
  parentEl.appendChild(el);
  return {
    destroy() {
      el.remove();
    }
  };
}

export function getFinalTarget(target: string | HTMLElement | null): HTMLElement | null {
  let finalTarget: HTMLElement | null = null;
  if (target === undefined || target === null) {
    finalTarget = null;
  } else if (target instanceof HTMLElement) {
    finalTarget = target;
  } else if (typeof target === 'string') {
    finalTarget = document.getElementById(target);
  } else {
    throw new TypeError(
      `Portal. Unsupported target of type ${typeof target}. Supported types are string(representing an ID) and a HTMLElement`
    );
  }
  return finalTarget;
}

// Svelte Action to implement portal functionality by appending to element of id as `elementID`.
export function portal(el: HTMLElement, target: string | HTMLElement) {
  let finalTarget: HTMLElement | null = getFinalTarget(target);
  return finalTarget !== undefined && finalTarget !== null
    ? doPortal(el, finalTarget)
    : doPortal(el, document.body);
}
