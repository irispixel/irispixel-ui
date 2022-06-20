<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ModalBase from './ModalBase.svelte';

  let clazz = '';
  export let color = '';
  export let ariaLabel = '';
  export let name = 'modal-dialog';
  export let isOpen = false;
  export let zIndex = 1;
  export let w = 500;
  export let h = 200;

  const dispatch = createEventDispatcher();

  let classes: Array<string> = [];
  let localClass = classes.join(' ');
</script>

<ModalBase bind:isOpen {color} {name} {zIndex} {w} {h}>
  <slot />
</ModalBase>
