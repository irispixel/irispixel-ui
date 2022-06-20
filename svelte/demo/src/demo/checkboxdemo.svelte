<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
	import CheckboxUnit from './checkboxunit.svelte';
	import CheckboxGroupUnit from './checkboxgroupunit.svelte';
	import Checkbox from '@svelte.core/checkbox/src/lib/Checkbox.svelte';

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
let agree = false;
let icon_agree = false;
</script>

<h1>Svelte Checkboxes</h1>

<h2>Vanilla Checkbox</h2>
<Checkbox bind:checked={agree}>
	<span slot="text">
		Agree {agree}
	</span>
</Checkbox>
<h2>Icon Checkbox</h2>
<Checkbox bind:checked={icon_agree}>
	<span slot="icon">
		I&nbsp;
	</span>
	<span slot="text">
		icon_agree {icon_agree}
	</span>
</Checkbox>
{#each colors as color, j}
	<div>
		<h3>{color}</h3>
	{#each sizes as size, k}
		<h4>{size}</h4>
		<CheckboxUnit  color={color} size={size} foods={second_foods} food_name={second_food_name}  />
	{/each}    
		<h3>disabled </h3>
	{#each sizes as size, k}
		<CheckboxUnit disabled={true} size={size} foods={second_foods} food_name={second_food_name} />
	{/each}    
	</div>
{/each}    

