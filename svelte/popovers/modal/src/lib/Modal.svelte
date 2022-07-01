<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import ModalBase from './ModalBase.svelte';

  export let isOpen = false;
  export let zIndex = 1;
  export let w = 500;
  export let h = 200;
</script>

<ModalBase bind:isOpen {zIndex} {w} {h}>
  <slot />
</ModalBase>
