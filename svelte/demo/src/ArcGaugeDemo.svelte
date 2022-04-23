<script lang="ts">
	import Box from '../../packages/box/src/Box.svelte';
	import ArcGauge from '../../packages/arcgauge/src/ArcGauge.svelte';

	function onMouseDown(e: MouseEvent) {

	}
</script>
<style lang="scss">
.boundary {
	border: 1px solid red;
}
</style>
<h3>ArcGauge</h3>
<Box class="l-my2">
	<p>This shows an arc gauge right below</p>
	<div class="boundary">
		<ArcGauge on:mousedown={onMouseDown} />
	</div>
</Box> 
