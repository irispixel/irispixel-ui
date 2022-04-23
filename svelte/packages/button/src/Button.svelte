<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<script lang="ts">
  import {get_color_class} from './button-functions';
  
  let clazz  = '';

  export let outline = false;
  export let id = 'button-id';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export {clazz as class};
  
  $: themeClass = get_color_class(color, outline, darkMode);
  
</script>
<style lang="scss">

</style>
<button
id={id}
aria-label={ariaLabel}
type="button"
class="l-button {themeClass} {clazz}"
on:click>
  <slot />
</button>
