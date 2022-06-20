<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import Portal from '@irispixel/svelte-portal/Portal.svelte';
  import { observe_element } from '@irispixel/common-intersector';
  import {
    TriggerEvent,
    HAlign,
    VAlign,
    CloseOnLeave,
    trigger,
    getAlignment
  } from '@irispixel/common-popover';

  export let vAlign = VAlign.Top;
  export let hAlign = HAlign.Left;
  export let triggerEvent = TriggerEvent.Hover;
  export let zIndex = 1;
  export let isOpen = false;
  export let closeOnLeave = CloseOnLeave.Target;

  // closeTimeoutms indicates the closetimeout in milliseconds
  export let closeTimeoutms = 200;

  let insidePopover = false;

  let popoverRoot: HTMLElement;

  let targetBoundingRect: DOMRectReadOnly;

  $: styles =
    targetBoundingRect !== null && targetBoundingRect !== undefined
      ? getAlignment({ targetBoundingRect: targetBoundingRect, vAlign: vAlign, hAlign: hAlign })
      : '';

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

  function onIntersect(rect: DOMRectReadOnly) {
    targetBoundingRect = rect;
    styles = getAlignment({
      targetBoundingRect: targetBoundingRect,
      vAlign: vAlign,
      hAlign: hAlign
    });
  }

  onMount(() => {
    return observe_element(popoverRoot, onIntersect);
  });
</script>

<span>Popover Event {triggerEvent} </span>
<div
  class="ip-popover-root"
  bind:this={popoverRoot}
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
