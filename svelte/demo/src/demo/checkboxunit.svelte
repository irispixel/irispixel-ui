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
	import Checkbox from '@svelte.core/checkbox/src/lib/Checkbox.svelte';
	import Box from '@svelte.core/box/src/lib/Box.svelte';

    export let foods: Array<Food> = [];
    export let food_name = '';
    export let color = 'primary';
	export let size = 'sm';
    export let disabled = false;

	function onFood(e: Event) {}
</script>
<Box class="l-my2">
	{#each foods as food, i}
		<Checkbox color={color}
			size={size}
			bind:checked={food.selected}
			name={food_name}
			value={food.name} 
            disabled={disabled}
			on:change={onFood}>
			<span slot="text">{food.name}</span>
		</Checkbox>
	{/each}
</Box>
<Box class="l-my2">

	{#each foods as food, i}
		<span class="item">
			{food.name}: {food.selected}
		</span>
	{/each}
	<hr/>
</Box>
<style lang="scss">
	.item {
		padding-right: 10px;
	}
</style>