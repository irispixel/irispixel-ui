---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Radio Demo'
setup: |
  import RadioDemo from '@svelte.demo/RadioDemo.svelte';

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
---

# Svelte Radiobutton

## Colors

{colors.map(color =>
<>

<h3>{color}</h3>
{sizes.map(size =>
<>
    <h4>{size}</h4>
      <RadioDemo
        color={color}
        size={size}
        foods={second_foods}
        food_name={second_food_name}
        food_group={second_foods[0].name}
        client:visible
      />
      <RadioDemo
        disabled={true}
        color={color}
        size={size}
        foods={second_foods}
        food_name={second_food_name}
        food_group={second_foods[0].name}
        client:visible
      />
</>
)}
</>
)}
