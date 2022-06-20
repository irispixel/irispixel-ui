// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export enum TriggerEvent {
  Hover = 'hover',
  Click = 'click'
}

function onEnter(el: HTMLElement) {
  el.dispatchEvent(new CustomEvent('showpopover'));
}

function onLeave(el: HTMLElement) {
  el.dispatchEvent(new CustomEvent('hidepopover'));
}

function onToggle(el: HTMLElement) {
  el.dispatchEvent(new CustomEvent('togglepopover'));
}

// Attach a hover / mouse enter leave listener to the given element
function doTriggerHover(el: HTMLElement) {
  el.addEventListener('mouseenter', (e) => {
    onEnter(el);
  });
  el.addEventListener('mouseleave', (e) => {
    onLeave(el);
  });
  return {
    destroy() {
      el.removeEventListener('mouseenter', (e) => {
        onEnter(el);
      });
      el.removeEventListener('mouseleave', (e) => {
        onLeave(el);
      });
    }
  };
}

// Attach a click listener to the given element
function doTriggerClick(el: HTMLElement) {
  el.addEventListener('focus', (e) => {
    onToggle(el);
  });
  el.addEventListener('click', (e) => {
    onToggle(el);
  });
  return {
    destroy() {
      el.removeEventListener('focus', (e) => {
        onToggle(el);
      });
      el.removeEventListener('click', (e) => {
        onToggle(el);
      });
    }
  };
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
