<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->


<script lang="ts">
   import { trigger  } from './popover-triggers';
   import { getAlignment } from './popover-positions';
   import { CloseOnLeave, HAlign, VAlign } from './popover-positions'
   import { TriggerEvent } from './popover-triggers';
   import { observe } from '@irispixel/common.intersector';
   import Portal from '@irispixel/svelte.portal';

   export let vAlign = VAlign.Top;
   export let hAlign = HAlign.Left;
   export let triggerEvent = TriggerEvent.Hover;
   export let zIndex = 1;
   export let isOpen = false;
   export let closeOnLeave = CloseOnLeave.Target;

   export let closeTimeout = 200;

   let insidePopover = false;

   let targetBoundingRect;

   $: styles = (targetBoundingRect !== null && targetBoundingRect !== undefined) ? 
      getAlignment({targetBoundingRect: targetBoundingRect, vAlign: vAlign, hAlign: hAlign}) : "";

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
         setTimeout( () => {
            if (triggerEvent === TriggerEvent.Hover && !insidePopover) {
               isOpen = false;
            }
         }, closeTimeout);
      }
   }

	function onPopoverMouseLeave(e: MouseEvent) {
      if (triggerEvent === TriggerEvent.Hover) {
         insidePopover = false;
         isOpen = false;
      }
	}   

   function onPopoverMouseEnter(e: MouseEvent) {
      if (triggerEvent === TriggerEvent.Hover) {
         insidePopover = true;
      }      
   }

   function onIntersect(e: CustomEvent) {
      targetBoundingRect = e.detail.entry.boundingClientRect;
      styles = getAlignment({targetBoundingRect: targetBoundingRect, vAlign: vAlign, hAlign: hAlign});
   }

</script>
<style>
.l-popover-root {
   display: inline-block;
}
</style>
<div class="l-popover-root" 
   use:observe
   on:intersect={onIntersect}
   use:trigger={triggerEvent}
   on:showpopover={onShow}
   on:togglepopover={onToggle}
   on:mouseleave={onTargetMouseLeave}>
	<slot name="target">
		<span>Target Not Specified</span>
	</slot>
</div>
<Portal isOpen={isOpen} zIndex={zIndex} styles={styles}
on:focus
on:click
on:mouseover
on:mousemove
on:mouseleave={onPopoverMouseLeave}
on:mouseenter={onPopoverMouseEnter}
on:mouseup
on:mousedown
on:mousewheel>
	<slot name="popover" />  
</Portal>
