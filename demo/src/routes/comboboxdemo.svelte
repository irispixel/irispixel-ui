<script lang="ts">
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import ComboBox from '../../../packages/combobox/src/lib/ComboBox.svelte';
	import { TriggerEvent } from '../../../packages/popover';
	import Layout from '$lib/layout.svelte';
</script>

<Layout>
	<h3>ComboBox</h3>

	<h4>Hover Example</h4>
	<Box class="l-my2">
		<ComboBox>
			<div class="find">
				<span>Paris</span>
				<span>Berlin</span>
				<span>Madrid</span>
			</div>
		</ComboBox>
	</Box>

	<h4>Click Example</h4>
	<Box class="l-my2">
		<ComboBox triggerEvent={TriggerEvent.Click}>
			<div class="find">
				<span>Hello</span>
				<span>World</span>
				<span>Universe</span>
			</div>
		</ComboBox>
	</Box>
</Layout>

<style>
	.find {
		display: flex;
		flex-direction: column;
		background-color: white;
		border: 1px solid blue;
		padding: 4px 20px;
		border-radius: 4px;
	}
</style>
