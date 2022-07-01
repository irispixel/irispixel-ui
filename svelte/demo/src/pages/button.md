---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Button Demo'
setup: |
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  import ButtonGroup from '@svelte.core/button/src/lib/ButtonGroup.svelte';
  import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';
  const variants = ['flat', 'text', 'ghost', 'raised'];
  const colors = ['primary', 'secondary'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
---

## Button Demos

{ variants.map(variant => <>

<h2>{variant} button</h2>
{colors.map(color => <>
<h3>{color}</h3>
{sizes.map(size => <>
<Button variant={variant} color={color} size={size} icon={MenuIcon} client:visible>Menu</Button>
</>)}
{sizes.map(size => <>
<Button variant={variant} color={color} size={size} icon={MenuIcon} disabled={true} client:visible>Menu</Button>
</>)}
</>)}
</>)}

## Button Group

<ButtonGroup>
  <Button color="primary" size="md">New</Button>
  <Button color="secondary" size="md">Login</Button>
</ButtonGroup>
