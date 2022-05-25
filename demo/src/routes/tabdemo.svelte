<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
	import Tabs from '../../../packages/tabs/src/lib/Tabs.svelte';
	import TabItem from '../../../packages/tabs/src/lib/TabItem.svelte';
	import TabContent from '../../../packages/tabs/src/lib/TabContent.svelte';
	import MyTabHeader from './MyTabHeader.svelte';

	let selectedValue = 'badge';
	let selectedFood = 'cookies';
</script>

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
