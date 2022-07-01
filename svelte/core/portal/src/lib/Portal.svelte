<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { clickOutside } from '@irispixel/common-clickoutside';
  import { portal } from '@irispixel/common-portal';
  let clazz = '';

  export let rootDivId = 'portals';
  export let isOpen = false;
  export let zIndex = 1;
  export let styles = '';
  export { clazz as class };
</script>

{#if isOpen}
  <div
    use:portal={rootDivId}
    style="z-index: {zIndex}; {styles};"
    class={clazz}
    use:clickOutside
    on:outclick
    on:focus
    on:click
    on:mouseover
    on:mousemove
    on:mouseenter
    on:mouseleave
    on:mouseup
    on:mousedown
  >
    <slot />
  </div>
{/if}
