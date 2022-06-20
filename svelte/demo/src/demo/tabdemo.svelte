<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
	import Tabs from '@svelte.components/tabs/src/lib/Tabs.svelte';
	import TabItem from '@svelte.components/tabs/src/lib/TabItem.svelte';
	import TabContent from '@svelte.components/tabs/src/lib/TabContent.svelte';
	import MyTabHeader from './MyTabHeader.svelte';

	let selectedValue = 'badge';
	let selectedFood = 'cookies';
</script>
<h3>Tab Demo</h3>
<Tabs bind:value={selectedValue}>
	<TabItem value="button">Button</TabItem>
	<TabItem value="badge">Badge</TabItem>
	<TabItem value="checkbox">Checkbox</TabItem>
</Tabs>
<Tabs bind:value={selectedFood}>
	<TabItem value="cake" let:selected>
		<MyTabHeader slot="header" {selected}>Cake</MyTabHeader>
	</TabItem>
	<TabItem value="cookies" let:selected>
		<MyTabHeader slot="header" {selected}>Cookies</MyTabHeader>
	</TabItem>
	<TabItem value="pastry" let:selected>
		<MyTabHeader slot="header" {selected}>Pastry</MyTabHeader>
	</TabItem>
</Tabs>
