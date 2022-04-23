// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

export enum TriggerEvent {
  Hover,
  Click
}
const showEvent = new CustomEvent('showpopover');

const hideEvent = new CustomEvent('hidepopover');

const toggleEvent = new CustomEvent('togglepopover');

function onEnter(el: HTMLElement) {
  el.dispatchEvent(showEvent);
}

function onLeave(el: HTMLElement) {
  el.dispatchEvent(hideEvent);
}

function onToggle(el: HTMLElement) {
  el.dispatchEvent(toggleEvent);
}

// Attach a hover / mouse enter leave listener to the given element
function doTriggerHover(el: HTMLElement) {
  el.addEventListener("mouseenter", (e) => { onEnter(el) });
  el.addEventListener("mouseleave", (e) => { onLeave(el) });
  return {
    destroy() {
      el.removeEventListener("mouseenter", (e) => { onEnter(el) });
      el.removeEventListener("mouseleave", (e) => { onLeave(el) });
    }
  }
}

// Attach a click listener to the given element
function doTriggerClick(el: HTMLElement) {
  el.addEventListener("focus", (e) => { onToggle(el) });
  el.addEventListener("click", (e) => { onToggle(el) });
  return {
    destroy() {
      el.removeEventListener("focus", (e) => { onToggle(el) });
      el.removeEventListener("click", (e) => { onToggle(el) });
    }
  }
}

// Svelte Action to implement trigger functionality
function trigger(el: HTMLElement, triggerEvent: TriggerEvent) {
  switch (triggerEvent) {
    case TriggerEvent.Click: // trigger click and focus
      return doTriggerClick(el);
    case TriggerEvent.Hover:
    default:
      return doTriggerHover(el);
  }
}

export { trigger };
