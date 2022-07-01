---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Toggle Demo'
setup: |
  import Toggle from '@svelte.popovers/togglebutton/src/lib/Toggle.svelte';
  import ToggleDemo from '@svelte.demo/ToggleDemo.svelte';
  function onToggle() {
    console.log(`Selected: ${selected3} `);
  }
  let selected3 = false;
  const colors = ['primary', 'secondary'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const variants = ['ios', 'android', 'windows'];
  let checked1 = true;
  let checked2 = false;
  let checked3 = true;
---

# Svelte Toggle Demo

## Toggle with On and Off

<ToggleDemo client:visible />

## Colors and Sizes

{ variants.map(variant => <>

<h2>{variant} toggle</h2>
{colors.map(color => <>
<h3>{color}</h3>
{sizes.map(size => <>
          <Toggle variant={variant} checked={checked1} color={color} size={size} client:visible />
</>)}
{sizes.map(size => <>
          <Toggle variant={variant} checked={checked2} color={color} size={size} client:visible />
</>)}
{sizes.map(size => <>
          <Toggle variant={variant} disabled={true} checked={true} color={color} size={size} client:visible />
</>)}
</>)}
</>)}
