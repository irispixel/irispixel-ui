<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->

<script>
	import { portal  } from './portal-actions';
	let clazz  = '';

	export let isOpen = false;
	export let zIndex = 1;
	export let rootDivId = 'portals';
	export {clazz as class};
</script>
{#if isOpen}
<div use:portal={rootDivId} style="z-index: {zIndex}; position: fixed;" class="{clazz}">
	<slot></slot>
</div>
{/if}	
