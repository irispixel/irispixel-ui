---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Link Demo'
setup: |
  import Link from '@svelte.core/link/src/lib/Link.svelte';
  import ButtonGroup from '@svelte.core/button/src/lib/ButtonGroup.svelte';
  import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';
  const variants = ['flat', 'text', 'ghost', 'raised'];
  const colors = ['primary', 'secondary'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
---

## Link Demos

{ variants.map(variant =>
<>

<h2>{variant} button</h2>
{colors.map(color => 
<>
<h3>{color}</h3>
{sizes.map(size =>
<>
<Link variant={variant} color={color} size={size} icon={MenuIcon} client:visible>Menu</Link>
</>
)
}
{sizes.map(size =>
<>
<Link variant={variant} color={color} size={size} icon={MenuIcon} disabled={true} client:visible>Menu</Link>
</>
)
}
</>
)}
</>
)
}

## Button Group with Links

<ButtonGroup>
  <Link color="primary" size="md">New</Link>
  <Link color="secondary" size="md">Login</Link>
</ButtonGroup>
