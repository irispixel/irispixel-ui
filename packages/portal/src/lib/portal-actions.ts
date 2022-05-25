// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

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
function portal(el: HTMLElement, parentElementID: string) {
  const parentEl = document.getElementById(parentElementID);
  return parentEl !== undefined && parentEl !== null
    ? doPortal(el, parentEl)
    : doPortal(el, document.body);
}

// Svelte Action to implement portal functionality by appending to document body
function portalToBody(el: HTMLElement) {
  return doPortal(el, document.body);
}

export { portal, portalToBody };
