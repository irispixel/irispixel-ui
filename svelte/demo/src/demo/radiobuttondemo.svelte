<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
	import RadioUnit from './radiounit.svelte';

	let fruit_group_name = 'fruits';
	let fruit_group: Array<string> = [];
	let fruits = [
		{ name: 'mango', selected: true },
		{ name: 'orange', selected: false },
		{ name: 'apple', selected: false }
	];

	let second_food_name = 'second_food_name';
	let second_food_group: Array<string> = ['pasta', 'pizza'];
	let second_foods = [
		{ name: 'cake', selected: true },
		{ name: 'creams', selected: false },
		{ name: 'milkshake', selected: false }
	];
const colors = ['primary', 'secondary'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<h1>Svelte RadioButton</h1>

{#each colors as color, j}
	<div>
		<h3>{color}</h3>
	{#each sizes as size, k}
		<h4>{size}</h4>
		<RadioUnit  color={color} size={size} foods={second_foods} food_name={second_food_name} food_group={second_foods[0].name} />
	{/each}    
		<h3>disabled </h3>
	{#each sizes as size, k}
		<RadioUnit disabled={true} size={size} foods={second_foods} food_name={second_food_name} />
	{/each}    
	</div>
{/each}    

