---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Tooltip Demo'
setup: |
  import { TriggerEvent, PopoverPosition } from '@irispixel/common-popover';
  import Tooltip from '@svelte.components/tooltip/src/lib/Tooltip.svelte';
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  import Box from '@svelte.core/box/src/lib/Box.svelte';
---

## Tooltip Demos

{Object.values(PopoverPosition).map(position =>
<>

<h4>PopoverPosition {position}</h4>
<Tooltip position={position} message="Nice Tooltip" client:visible>
<Button class="l-px2 l-py1" client:visible>A pretty long button to see the tooltips better</Button>
</Tooltip>
</>
)
}

## Tooltip Click

<Tooltip
position={PopoverPosition.BottomMiddle}
message="Tooltip at Bottom"
triggerEvent={TriggerEvent.Click}
client:visible> <Button class="l-px2 l-py1" client:visible>Button with Popover - Bottom Middle</Button> </Tooltip>
