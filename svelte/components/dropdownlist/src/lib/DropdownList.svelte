<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { get_color_class } from './dropdownlist-functions';
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  import { CloseOnLeave, HAlign, VAlign, TriggerEvent } from '@irispixel/common-popover';
  import Button from '@irispixel/svelte-button/Button.svelte';

  export let selected = '';
  export let outline = false;
  let clazz = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export let zIndex = 1;
  export let isOpen = false;
  export let vAlign = VAlign.Bottom;
  export let hAlign = HAlign.Left;
  let closeOnLeave = CloseOnLeave.Popover;
  export { clazz as class };

  let styles = '';

  let classes: Array<string> = [];
  classes.push(get_color_class(color, outline, darkMode));

  let localClass = classes.join(' ');
</script>

<Popover {zIndex} triggerEvent={TriggerEvent.Click} bind:isOpen {vAlign} {hAlign} {closeOnLeave}>
  <div slot="target" class="ip-dropdown-input-root">
    <span class="ip-dropdown-list-selected" />
    <Button aria-label={ariaLabel} type="button" class="l-button">drop</Button>
  </div>
  <div slot="popover" class="ip-dropdown-list-root">
    <slot />
  </div>
</Popover>

<style lang="scss">
  .ip-dropdown-input-root {
    cursor: pointer;
    outline: none;
  }
  .ip-dropdown-list-root {
    display: inline-block;
  }
  .ip-dropdown-list-selected {
    width: 80px;
  }
</style>
