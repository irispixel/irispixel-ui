<script lang="ts">
	import Toggle from '../../../packages/togglebutton/src/lib/Toggle.svelte';
	import CircleToggle from '../../../packages/togglebutton/src/lib/CircleToggle.svelte';
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import Layout from '$lib/layout.svelte';

	function onToggle() {
		console.log(`Selected: ${selected3} `);
	}

	let selected1 = false;
	let group_value1 = 'agree1';

	let selected3 = false;

	let selected4 = true;
	let group_value4 = 'agree4';

	let group_value5 = 'agree5';

	let selected6 = true;
	let group_value6 = 'agree6';

	let selected7 = true;
	let group_value7 = 'agree7';

	let group_value8 = 'agree8';

	let selected9 = true;
	let group_value9 = 'agree9';
	let group_value10 = 'agree10';
</script>

<Layout>
	<h2>Toggle</h2>

	<h3>Toggle</h3>
	<Box class="l-my2">
		<Toggle sz="sm" bind:checked={selected9} group={group_value9} />

		<Toggle sz="sm" color="secondary" bind:checked={selected9} group={group_value9} />

		<Toggle sz="sm" color="tertiary" bind:checked={selected9} group={group_value9} />

		<Toggle sz="sm" color="quaternary" bind:checked={selected9} group={group_value9} />

		<Toggle sz="sm" color="quinary" bind:checked={selected9} group={group_value9} />

		<Toggle sz="sm" color="quinary" checked={false} />
	</Box>

	<h3>Toggle - Disabled - On and Off</h3>
	<Box class="l-my2">
		<Toggle checked disabled group={group_value5} />

		<Toggle checked color="secondary" disabled group={group_value5} />

		<Toggle checked color="tertiary" disabled group={group_value5} />

		<Toggle checked color="quaternary" disabled group={group_value5} />

		<Toggle checked color="quinary" disabled group={group_value5} />

		<Toggle checked={false} disabled group={group_value5} />
	</Box>

	<h2>Toggle DarkMode</h2>
	<Box class="l-my2">
		<Box>
			<Toggle sz="sm" darkmode bind:checked={selected4} group={group_value4} />

			<Toggle sz="sm" darkmode color="secondary" bind:checked={selected4} group={group_value4} />

			<Toggle sz="sm" darkmode color="tertiary" bind:checked={selected4} group={group_value4} />

			<Toggle sz="sm" darkmode color="quaternary" bind:checked={selected4} group={group_value4} />

			<Toggle sz="sm" darkmode color="quinary" bind:checked={selected4} group={group_value4} />

			<Toggle sz="sm" darkmode checked={false} />
		</Box>
	</Box>
	<h3>Toggle DarkMode and Disabled</h3>
	<Box class="l-my2">
		<Toggle checked darkmode disabled group={group_value5} />
		<Toggle checked darkmode color="secondary" disabled group={group_value5} />

		<Toggle checked darkmode color="tertiary" disabled group={group_value5} />

		<Toggle checked darkmode color="quaternary" disabled group={group_value5} />

		<Toggle checked darkmode color="quinary" disabled group={group_value5} />

		<Toggle checked={false} darkmode disabled group={group_value5} />
	</Box>
	<h2>Sizes</h2>

	<h2>Toggle Sizes</h2>
	<Box class="l-my2">
		<Toggle sz="sm" bind:checked={selected6} group={group_value6} />

		<Toggle sz="md" bind:checked={selected6} group={group_value6} />

		<Toggle sz="lg" bind:checked={selected6} group={group_value6} />
	</Box>

	<h2>Label With Text</h2>
	<Box class="l-my2">
		<Toggle sz="sm" bind:checked={selected7} group={group_value7}>
			<span slot="text">Hello Universe {selected7}</span>
		</Toggle>
	</Box>

	<h2>CircleToggle - On and Off</h2>
	<Box class="l-my2">
		<Toggle sz="md" bind:checked={selected1} group={group_value1}>
			<CircleToggle slot="icon">
				<span slot="on">On</span>
				<span slot="off">Off</span>
			</CircleToggle>
			<span slot="text">
				Selected: {selected1}
			</span>
		</Toggle>
	</Box>
</Layout>

<style lang="scss">
</style>
