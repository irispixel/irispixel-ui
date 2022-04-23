<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  import { createEventDispatcher} from 'svelte';
  import {get_backdrop_color_class, get_color_class} from './modal-functions';
  import Portal from './../../portal';
  
  export let color = '';
  export let darkMode = false;
  export let name = "modal-dialog";
  export let isOpen = false;
  export let zIndex = 1;
  export let hideBackdrop = false;

  export let w=500;
  export let h=200;

  const dispatch = createEventDispatcher();
    
  function onClickBackdrop(event: MouseEvent) {
    isOpen = false;
  }

  let backdrop_color_class = get_backdrop_color_class(color, darkMode);

  let classes: Array<string> = [];
  classes.push(get_color_class(color, darkMode));
  let localClass = classes.join(" ");

</script>
<style lang="scss">
.l-full-screen-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;  
}
.l-modal-backdrop-bg {
  background-color: rgb(0, 0, 0, 0.4);
}
.l-modal-bg {
  background-color: white;
}
.l-modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
}
</style>
{#if isOpen}
<Portal bind:isOpen={isOpen}>
  {#if !hideBackdrop}
  <div class="l-full-screen-modal {backdrop_color_class}" style="z-index: {zIndex};"  on:click={onClickBackdrop} />
  {/if}
  <div class="l-modal-dialog" style="z-index: {zIndex};">
  <div class="{localClass}" style="width: {w}px; height: {h}px; margin-left: {-w/2}px; margin-top: {-h/2}px;">
      <slot />
  </div>
  </div>
</Portal>
{/if}
