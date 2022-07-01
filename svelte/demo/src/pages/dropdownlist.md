---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Dropdown Demo'
setup: |
  import DropdownListDemo from '@svelte.demo/DropdownListDemo.svelte';
  import DropdownListCustomDemo from '@svelte.demo/DropdownListCustomDemo.svelte';
  import { DropdownListPosition } from '@irispixel/common-dropdown';
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  let items = ['Paris - France', 'Berlin - Germany', 'Madrid - Spain'];
---

## Dropdown Demos

{Object.values(DropdownListPosition).map(position =>
<>

<h4>DropdownListPosition {position}</h4>
<DropdownListDemo position={position} items={items} client:visible>
</DropdownListDemo>
</>
)
}

### Custom Dropdown Label

Example

<DropdownListCustomDemo client:visible />
