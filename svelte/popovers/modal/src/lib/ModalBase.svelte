<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Portal from '@irispixel/svelte-portal/Portal.svelte';
  export let isOpen = false;
  export let zIndex = 1;

  export let w = 500;
  export let h = 200;

  let root: HTMLDivElement;

  function isClickOutside(event: MouseEvent): boolean {
    if (!root) {
      return true; // no element do nothing
    }
    if (!(event.target instanceof Element)) {
      return true;
    } else if (!root.contains(event.target)) {
      // The current element or one of its children is the target of click.
      // So it is not a "click outside" then.
      return true;
    }
    return false;
  }

  function onClickBackdrop(event: MouseEvent) {
    let outside = isClickOutside(event);
    if (outside) {
      isOpen = false;
    } else {
    }
  }

  let classes: Array<string> = [];
  let localClass = classes.join(' ');
</script>

{#if isOpen}
  <Portal {zIndex} on:click={onClickBackdrop} bind:isOpen class="ip-full-screen-modal">
    <div
      bind:this={root}
      class="ip-modal-dialog {localClass}"
      style="top: 50%; left: 50%; width: {w}px; height: {h}px; margin-left: {-w /
        2}px; margin-top: {-h / 2}px; z-index: {zIndex + 1};"
    >
      <slot />
    </div>
  </Portal>
{/if}

<style lang="scss">
  @import '../../../../../css/src/modal.scss';
</style>
