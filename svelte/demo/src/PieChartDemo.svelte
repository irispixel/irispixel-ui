<script lang="ts">
	import Box from '../../packages/box/src/Box.svelte';
	import PieChart from '../../packages/piechart/src/PieChart.svelte';

</script>
<style lang="scss">
.boundary {
	border: 1px solid red;
}
</style>
<h3>PieChart</h3>
<Box class="l-my2">
	<p>This shows a pie chart</p>
	<div class="boundary l-mx4">
		<PieChart width={400} />
	</div>
</Box> 
