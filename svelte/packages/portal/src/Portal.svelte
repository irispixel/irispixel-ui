<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->

<script>
	import { portal  } from './portal-actions';

	let clazz  = '';

	export let isOpen = false;
	export let rootDivId = 'portals';
	export let zIndex = 1;
	export let styles = '';
	export {clazz as class};
</script>
{#if isOpen}
<div use:portal={rootDivId}  
	style="position: fixed; z-index: {zIndex}; {styles};" class="{clazz}"
	on:focus
	on:click
	on:mouseover
	on:mousemove
	on:mouseenter
	on:mouseleave
	on:mouseup
	on:mousedown
	on:mousewheel>
	<slot></slot>
</div>
{/if}	
