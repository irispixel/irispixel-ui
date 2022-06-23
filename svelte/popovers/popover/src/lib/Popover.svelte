<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import {
    TriggerEvent,
    HAlign,
    VAlign,
    CloseOnLeave,
    trigger,
    getAlignmentCSS,
    ElementRect
  } from '@irispixel/common-popover';

  import Portal from '@irispixel/svelte-portal/Portal.svelte';
  import { observe, observe_with_options } from '@irispixel/common-intersector';

  export let vAlign = VAlign.Top;
  export let hAlign = HAlign.Left;
  export let triggerEvent = TriggerEvent.Hover;
  export let zIndex = 1;
  export let isOpen = false;
  export let closeOnLeave = CloseOnLeave.Target;

  // threshold represents the threshold parameter of IntersectionObserver.
  export let threshold = 0.1;

  // closeTimeoutms indicates the closetimeout in milliseconds
  export let closeTimeoutms = 200;

  let insidePopover = false;

  let elementRect = new ElementRect(0, 0, 0, 0);

  $: observe_config = {
    root: null, // 'null' - default viewport  . default value
    rootMargin: '0px', // default value
    threshold: threshold
  };

  $: styles = getAlignmentCSS({
    elementRect: elementRect,
    vAlign: vAlign,
    hAlign: hAlign
  });

  function onShow(el: HTMLElement) {
    isOpen = true;
  }

  function onToggle(el: HTMLElement) {
    isOpen = !isOpen;
  }

  function onTargetMouseLeave(e: MouseEvent) {
    if (closeOnLeave === CloseOnLeave.Target) {
      isOpen = false;
    } else {
      setTimeout(() => {
        if (triggerEvent === TriggerEvent.Hover && !insidePopover) {
          isOpen = false;
        }
      }, closeTimeoutms);
    }
  }

  function onPopoverMouseEnter(e: MouseEvent) {
    if (triggerEvent === TriggerEvent.Hover) {
      insidePopover = true;
    }
  }

  function onPopoverMouseLeave(e: MouseEvent) {
    if (triggerEvent === TriggerEvent.Hover) {
      insidePopover = false;
      isOpen = false;
    }
  }

  function onIntersect(e: CustomEvent) {
    const target = e.target as HTMLElement;
    elementRect = new ElementRect(
      target.offsetLeft,
      target.offsetTop,
      target.offsetWidth,
      target.offsetHeight
    );
    styles = getAlignmentCSS({ elementRect: elementRect, vAlign: vAlign, hAlign: hAlign });
  }
</script>

<div
  class="ip-popover-root"
  use:observe_with_options={observe_config}
  on:intersect={onIntersect}
  use:trigger={triggerEvent}
  on:showpopover={onShow}
  on:togglepopover={onToggle}
  on:mouseleave={onTargetMouseLeave}
>
  <slot name="target">
    <span>Target Not Specified</span>
  </slot>
</div>
<Portal
  {isOpen}
  {zIndex}
  {styles}
  on:focus
  on:click
  on:mouseover
  on:mousemove
  on:mouseenter={onPopoverMouseEnter}
  on:mouseleave={onPopoverMouseLeave}
  on:mouseup
  on:mousedown
  on:mousewheel
>
  <slot name="popover" />
</Portal>

<style lang="scss">
  .ip-popover-root {
    display: inline-block;
  }
</style>
