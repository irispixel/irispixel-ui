<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {get_color_class} from './breadcrumb-functions';
  
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
aria-label={ariaLabel}
type="button"
class="l-button {localClass} {clazz}"
on:click={onClick}
on:keydown={onKeyDown}
on:keyup={onKeyUp}>
<slot />
</button>
