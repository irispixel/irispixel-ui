<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
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
