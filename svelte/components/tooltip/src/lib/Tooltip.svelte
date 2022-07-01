<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  import {
    CloseOnLeave,
    TriggerEvent,
    getPopoverStyles,
    PopoverPosition
  } from '@irispixel/common-popover';

  export let color = '';
  export let ariaLabel = '';
  export let zIndex = 2;
  export let isOpen = false;
  export let triggerEvent = TriggerEvent.Hover;
  export let position = PopoverPosition.BottomRight;
  export let message = 'Tooltip Message';
  export let closeOnLeave = CloseOnLeave.Target;

  let clazz = '';
  export { clazz as class };

  $: themeClass = ''; // get_color_class(color, outline, darkMode);
</script>

<Popover
  {zIndex}
  {triggerEvent}
  bind:isOpen
  fnGetStyles={getPopoverStyles(position)}
  {closeOnLeave}
>
  <div slot="target">
    <slot />
  </div>
  <div slot="popover" class="ip-tooltip {themeClass}">
    <span>{message}</span>
  </div>
</Popover>

<style lang="scss">
  .ip-tooltip {
    cursor: pointer;
  }
</style>
