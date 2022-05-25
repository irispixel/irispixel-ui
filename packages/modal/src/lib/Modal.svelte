<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ModalBase from './ModalBase.svelte';
  
  let clazz  = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export let hideBackdrop = false;
  export let name = "modal-dialog";
  export let isOpen = false;
  export let zIndex = 1;
  export let w=500;
  export let h=200;

  const dispatch = createEventDispatcher();
    
  let classes: Array<string> = [];
  let localClass = classes.join(" ");
</script>
<style lang="scss">
</style>
<ModalBase bind:isOpen={isOpen} 
  hideBackdrop={hideBackdrop}
  darkMode={darkMode} 
  color={color}
  zIndex={zIndex}
  w={w} h={h}>
  <slot />
</ModalBase>
