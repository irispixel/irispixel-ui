<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {get_color_class} from './input-functions';
  
  export let outline = false;
  let clazz  = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export {clazz as class};
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
  
  let localClass = classes.join(" ");
</script>
<style lang="scss">

</style>
<button
role="button"
aria-label={ariaLabel}
type="button"
class="l-button {localClass} {clazz}"
on:click={onClick}
on:keydown={onKeyDown}
on:keyup={onKeyUp}>
<slot />
</button>
