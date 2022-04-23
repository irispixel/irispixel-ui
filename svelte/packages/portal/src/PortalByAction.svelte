<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
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
