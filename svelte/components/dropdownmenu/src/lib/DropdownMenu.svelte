<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { get_color_class } from './dropdownmenu-functions';
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  import { CloseOnLeave, HAlign, TriggerEvent, VAlign } from '@irispixel/common-popover';
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
  <div slot="target" class="l-dropdown-input-root">
    <span class="l-dropdown-list-selected" />
    <button aria-label={ariaLabel} type="button" class="l-button"> drop </button>
  </div>
  <div slot="popover" class="l-dropdown-list-root">
    <slot />
  </div>
</Popover>

<style lang="scss">
  .ip-dropdown-input-root {
    cursor: pointer;
  }
  .ip-dropdown-list-root {
    display: inline-block;
  }
  .ip-dropdown-list-selected {
    width: 80px;
  }
</style>
