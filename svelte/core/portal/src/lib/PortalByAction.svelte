<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
  import { portal } from './portal-actions';
  export let isOpen = false;
  export let rootDivId = 'portals';
</script>

{#if isOpen}
  <div use:portal={rootDivId}>
    <slot />
  </div>
{/if}
