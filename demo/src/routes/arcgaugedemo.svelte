<script lang="ts">
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import ArcGauge from '../../../packages/arcgauge/src/lib/ArcGauge.svelte';
	import Layout from '$lib/layout.svelte';

	function onMouseDown(e: MouseEvent) {}
</script>

<Layout>
	<h3>ArcGauge</h3>
	<Box class="l-my2">
		<p>This shows an arc gauge right below</p>
		<div class="boundary">
			<ArcGauge on:mousedown={onMouseDown} />
		</div>
	</Box>
</Layout>

<style lang="scss">
	.boundary {
		border: 1px solid red;
	}
</style>
