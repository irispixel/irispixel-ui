<script lang="ts">
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import NumericTextbox from '../../../packages/numerictextbox/src/lib/NumericTextbox.svelte';
	import Layout from '$lib/layout.svelte';
</script>

<Layout>
	<h3>NumericTextbox</h3>
	<Box class="l-my2">
		<NumericTextbox min={1} value={5} max={10} />
	</Box>
</Layout>
