<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
  import { portal } from './portal-actions';
  let clazz = '';

  export let isOpen = false;
  export let zIndex = 1;
  export let rootDivId = 'portals';
  export { clazz as class };
</script>

{#if isOpen}
  <div use:portal={rootDivId} style="z-index: {zIndex}; position: fixed;" class={clazz}>
    <slot />
  </div>
{/if}
