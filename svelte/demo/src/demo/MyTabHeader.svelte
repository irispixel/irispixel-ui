<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
	export let selected = false;
</script>

<span class="ip-tabheader-root" class:selected>
	<slot />
</span>

<style lang="scss">
	.ip-tabheader-root {
		border: 1px solid cyan;
		border-bottom-width: 0;
		margin: 0 10px 0 0;
		padding: 2px 4px;
		border-color: cyan;
		border-style: solid;
	}
	.selected {
		border-bottom: 2px solid darkcyan;
		color: #333;
	}
</style>
