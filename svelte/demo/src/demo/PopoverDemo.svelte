<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  import { TriggerEvent, getPopoverStyles, PopoverPosition } from '@irispixel/common-popover';
  import Popover from '@svelte.popovers/popover/src/lib/Popover.svelte';
  import { CloseOnLeave } from '@irispixel/common-popover';
  export let position = PopoverPosition.BottomLeft;
  export let trigger = TriggerEvent.Hover;
  export let closeOnLeave = CloseOnLeave.Target;
</script>

<Popover fnGetStyles={getPopoverStyles(position)} triggerEvent={trigger} {closeOnLeave}>
  <Button slot="target" size="sm">Button with popoverPosition: {position}</Button>
  <span slot="popover" class="red-border">Tooltip content - {position}</span>
</Popover>
