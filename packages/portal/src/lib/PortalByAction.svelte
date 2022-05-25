<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script>
	import { portal  } from './portal-actions';
	export let isOpen = false;
	export let rootDivId = 'portals';
</script>

{#if isOpen}
<div use:portal={rootDivId}>
	<slot></slot>
</div>
{/if}	
