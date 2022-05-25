<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script lang="ts">
	import {get_color_class} from './tooltip-functions';
	import { CloseOnLeave, HAlign, Popover, TriggerEvent, VAlign } from '@irispixel/svelte.popover';
  
	export let outline = false;
	export let color = '';
	export let ariaLabel = '';
	export let darkMode = false;
	export let zIndex = 2;
	export let isOpen = false;
	export let triggerEvent = TriggerEvent.Hover;
	export let vAlign = VAlign.Bottom;
	export let hAlign = HAlign.Left;
	export let message = 'Tooltip Message';
	export let closeOnLeave = CloseOnLeave.Target;

	let clazz  = '';
	export {clazz as class};
  
	$: themeClass = get_color_class(color, outline, darkMode);
  
  </script>
  <style lang="scss">
  .l-tooltip {
	cursor: pointer;
  }
  </style>
  <Popover zIndex={zIndex} triggerEvent={triggerEvent} bind:isOpen={isOpen} 
  	vAlign={vAlign} hAlign={hAlign} closeOnLeave={closeOnLeave}>
	<div slot="target">
		<slot />
	</div>
	<div slot="popover" class="l-tooltip {themeClass}">
	  <span>{message}</span>
	</div>
  </Popover>
  