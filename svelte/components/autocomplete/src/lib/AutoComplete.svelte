<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<script lang="ts">
  import { get_color_class } from './autocomplete-functions';
  import { CloseOnLeave, TriggerEvent } from '@irispixel/common-popover';
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  export let selected = '';
  export let outline = false;
  let clazz = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export let zIndex = 1;
  export let isOpen = false;
  let closeOnLeave = CloseOnLeave.Popover;
  export { clazz as class };

  let styles = '';

  let classes: Array<string> = [];
  classes.push(get_color_class(color, outline, darkMode));

  let localClass = classes.join(' ');
</script>

<Popover {zIndex} triggerEvent={TriggerEvent.Click} bind:isOpen {closeOnLeave}>
  <div slot="target" class="l-dropdown-input-root">
    <span class="l-dropdown-list-selected" />
    <button aria-label={ariaLabel} type="button" class="l-button"> drop </button>
  </div>
  <div slot="popover" class="l-dropdown-list-root">
    <slot />
  </div>
</Popover>

<style lang="scss">
  .l-dropdown-input-root {
    cursor: pointer;
    border: 1px solid red;
  }
  .l-dropdown-list-root {
    display: inline-block;
  }
  .l-dropdown-list-selected {
    width: 80px;
  }
</style>
