<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  import Portal from '@irispixel/svelte-portal/Portal.svelte';
  import {
    TriggerEvent,
    CloseOnLeave,
    trigger,
    getElementRect,
    zeroRect,
    getEmptyStyles
  } from '@irispixel/common-popover';
  import type { FnGetStyles } from '@irispixel/common-popover';
  import { observe_with_options } from '@irispixel/common-intersector';
</script>

<script lang="ts">
  export let triggerEvent = TriggerEvent.Hover;
  export let zIndex = 1;
  export let isOpen = false;
  export let closeOnLeave = CloseOnLeave.Target;

  // threshold represents the threshold parameter of IntersectionObserver.
  export let threshold = 0.0;

  // closeTimeoutms indicates the closetimeout in milliseconds
  export let closeTimeoutms = 200;

  export let fnGetStyles: FnGetStyles = getEmptyStyles;

  let insidePopover = false;

  // observe_config changes when the threshold changes
  $: observe_config = {
    root: null, // 'null' - default viewport  . default value
    rootMargin: '0px', // default value
    threshold: threshold
  };

  let popoverRoot: HTMLElement;

  let intersecting = false;

  $: myElementRect = intersecting ? getElementRect(popoverRoot) : zeroRect;
  // Compute the rectangle only if it is in the viewport. Otherwise don't bother recomputing it to save on the CPU cycles

  $: styles = fnGetStyles(myElementRect);

  function onShow() {
    isOpen = true;
  }

  function onToggle() {
    isOpen = !isOpen;
  }

  function onTargetMouseLeave() {
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

  function onPopoverMouseEnter() {
    if (triggerEvent === TriggerEvent.Hover) {
      insidePopover = true;
    }
  }

  function onPopoverMouseLeave() {
    if (triggerEvent === TriggerEvent.Hover) {
      insidePopover = false;
      isOpen = false;
    }
  }

  function onIntersect(e: CustomEvent) {
    const entry = e.detail.entry;
    intersecting = entry.isIntersecting;
  }
</script>

<div
  class="ip-popover-root"
  bind:this={popoverRoot}
  use:observe_with_options={observe_config}
  on:intersect={(e) => onIntersect(e)}
  use:trigger={triggerEvent}
  on:showpopover={() => onShow()}
  on:togglepopover={() => onToggle()}
  on:mouseleave={() => onTargetMouseLeave()}
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
  on:mouseenter={() => onPopoverMouseEnter()}
  on:mouseleave={() => onPopoverMouseLeave()}
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
