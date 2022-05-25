<script lang="ts">
	import DarkTheme from '../../../packages/darktheme/src/lib/DarkTheme.svelte';
	import Layout from '$lib/layout.svelte';

	let darkmode = false;

	let text = '';
	function onChange(e: CustomEvent) {
		text = darkmode ? 'Dark' : 'Light';
	}
</script>

<Layout>
	<h3>Dark Theme Second</h3>
	<DarkTheme bind:darkmode on:change={onChange} />
	{darkmode}
	{text}
</Layout>
