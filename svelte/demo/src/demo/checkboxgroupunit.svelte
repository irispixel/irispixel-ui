<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts" context="module">
    export type Food = {
        name: string,
        selected: boolean,
    };
</script>
<script lang="ts">
	import CheckboxItem from '@svelte.core/checkbox/src/lib/CheckboxItem.svelte';
	import CheckboxGroup from '@svelte.core/checkbox/src/lib/CheckboxGroup.svelte';
	import Box from '@svelte.core/box/src/lib/Box.svelte';

    export let foods: Array<Food> = [];
    export let food_name = '';
    export let color = 'primary';
    export let disabled = false;
	export let group: Array<string> = [];

	function onFood(e: Event) {}
</script>
<Box class="l-my2">
	<CheckboxGroup group={group} name={food_name}>
		<!--
	{#each foods as food, i}
		<CheckboxItem color={color}
			value={food.name} 
            disabled={disabled}
			on:change={onFood}>
			<span slot="text">{food.name}</span>
		</CheckboxItem>
	{/each}
	-->
	</CheckboxGroup>
</Box>
<Box class="l-my2">
	{#each foods as food, i}
		<div class="l-px2">
			{food.name}: {food.selected}
		</div>
	{/each}
	Groups: {group}
</Box>