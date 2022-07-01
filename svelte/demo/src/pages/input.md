---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Input Demo'
setup: |
  import Input from '@svelte.core/input/src/lib/Input.svelte';
  import InputBindDemo from '@svelte.demo/InputBindDemo.svelte';
  import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';
  const colors = ['primary', 'secondary'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const variants = ['flat'];
  let value = 'universe';
---

# Input

<InputBindDemo client:visible />

## Variants

{ variants.map(variant =>
<>

<h2>{variant} button</h2>
{colors.map(color => 
<>
<h3>{color}</h3>
{sizes.map(size =>
<>
<Input variant={variant} color={color} size={size} icon={MenuIcon} client:visible>Menu</Input>
</>
)
}
<h4>Disabled  - {color}</h4>
{sizes.map(size =>
<>
<Input variant={variant} color={color} size={size} icon={MenuIcon} disabled={true} client:visible>Menu</Input>
</>
)
}
</>
)}
</>
)
}
