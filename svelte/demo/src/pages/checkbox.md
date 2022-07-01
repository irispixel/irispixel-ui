---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Checkbox Demo'
setup: |
  import CheckboxDemo from '@svelte.demo/CheckboxDemo.svelte';
  import CheckboxGroupDemo from '@svelte.demo/CheckboxGroupDemo.svelte';
  import CheckboxIconDemo from '@svelte.demo/CheckboxIconDemo.svelte';
  import Checkbox from '@svelte.core/checkbox/src/lib/Checkbox.svelte';
  import RawCheckbox from '@svelte.core/checkbox/src/lib/RawCheckbox.svelte';

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
---

# Svelte Checkboxes

## CheckboxGroup Demo

<CheckboxGroupDemo client:visible />

## Vanilla Checkbox

<Checkbox bind:checked={agree} client:visible>
  <span slot="text">
    Agree {agree}
  </span>
</Checkbox>

## Icon Checkbox

<CheckboxIconDemo client:visible />

## Colors

{colors.map(color =>
<>

<h3>{color}</h3>
{sizes.map(size =>
<>
<h4>{size}</h4>
<CheckboxDemo color={color} size={size} foods={second_foods} food_name={second_food_name} client:visible />
<CheckboxDemo disabled={true} color={color} size={size} foods={second_foods} food_name={second_food_name} client:visible />
</>
)}
</>
)}
