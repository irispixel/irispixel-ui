---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Popover Demo'
setup: |
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  import { TriggerEvent, getPopoverStyles, PopoverPosition } from '@irispixel/common-popover';
  import Popover from '@svelte.popovers/popover/src/lib/Popover.svelte';
  import PopoverDemo from '@svelte.demo/PopoverDemo.svelte';
---

# Popover Demo

## Positions

{Object.values(PopoverPosition).map(position =>

  <div class="container">
    <div class="left">
      <h4>{position}</h4>
    </div>
    <PopoverDemo position={position} client:visible />
  </div>
)}

## Event Click

<PopoverDemo position={PopoverPosition.TopRight} trigger={TriggerEvent.Click} client:visible />
