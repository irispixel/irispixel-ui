// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

// Attach the current node to the parentElement and removes the node when getting destroyed.
function doPortal(el: HTMLElement, parentEl: HTMLElement) {
  parentEl.appendChild(el);  
  return {
    destroy() {
      el.remove()
    }
  }
}


// Svelte Action to implement portal functionality by appending to element of id as `elementID`.
function portal(el: HTMLElement, parentElementID: string) {
  const parentEl = document.getElementById(parentElementID);
  return (parentEl !== undefined && parentEl !== null)  ? doPortal(el, parentEl) : doPortal(el, document.body);  
}

// Svelte Action to implement portal functionality by appending to document body
function portalToBody(el: HTMLElement) {
  return doPortal(el, document.body);  
}

export { portal, portalToBody };