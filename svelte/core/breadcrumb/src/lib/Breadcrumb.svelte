<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get_color_class } from './breadcrumb-functions';

  export let outline = false;
  let clazz = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export { clazz as class };
  const dispatch = createEventDispatcher();

  function onClick(event: MouseEvent) {
    dispatch('click', event);
  }
  function onKeyDown(event: KeyboardEvent) {
    dispatch('keydown', event);
  }
  function onKeyUp(event: KeyboardEvent) {
    dispatch('keyup', event);
  }

  let classes: Array<string> = [];
  classes.push(get_color_class(color, outline, darkMode));

  let localClass = classes.join(' ');
</script>

<button
  aria-label={ariaLabel}
  type="button"
  class="l-button {localClass} {clazz}"
  on:click={onClick}
  on:keydown={onKeyDown}
  on:keyup={onKeyUp}
>
  <slot />
</button>

<style lang="scss">
</style>
