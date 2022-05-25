<script lang="ts">
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import DropdownList from '../../../packages/dropdownlist/src/lib/DropdownList.svelte';
	import Layout from '$lib/layout.svelte';
	import { TriggerEvent } from '../../../packages/popover';
</script>

<Layout>
	<h3>DropdownList</h3>

	<h4>Hover Example</h4>
	<Box class="l-my2">
		<DropdownList>
			<div class="find">
				<span>Paris</span>
				<span>Berlin</span>
				<span>Madrid</span>
			</div>
		</DropdownList>
	</Box>

	<h4>Click Example</h4>
	<Box class="l-my2">
		<DropdownList triggerEvent={TriggerEvent.Click}>
			<div class="find">
				<span>Hello</span>
				<span>World</span>
				<span>Universe</span>
			</div>
		</DropdownList>
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
