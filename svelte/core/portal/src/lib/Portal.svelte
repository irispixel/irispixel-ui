<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { clickOutside } from '@irispixel/common-clickoutside';
  let clazz = '';

  export let isOpen = false;
  export let root: HTMLElement | string = 'portals';
  export let zIndex = 1;
  export let styles = '';
  export { clazz as class };

  let current: HTMLElement;

  // Attach the current node to the parentElement and removes the node when getting destroyed.
  function doPortal(parentEl: HTMLElement, el: HTMLElement) {
    parentEl.appendChild(el);
    return {
      destroy() {
        el.remove();
      }
    };
  }

  // Svelte Action to implement portal functionality by appending to element of id as `elementID`.
  function portal(target: string | HTMLElement, el: HTMLElement) {
    let finalTarget: HTMLElement | null = null;
    if (target === undefined || target === null) {
      finalTarget = null;
    } else if (typeof target === 'string') {
      finalTarget = document.getElementById(target);
      if (finalTarget === undefined || finalTarget === null) {
        console.warn(`Warning: @irispixel/svelte-portal.
				Div Element by ID ${target} not found in html. Hence appending to document.body`);
        finalTarget = document.body;
      }
    } else if (target instanceof HTMLElement) {
      finalTarget = target;
    } else {
      throw new TypeError(`Portal target type not supported.`);
    }
    return finalTarget !== undefined && finalTarget !== null
      ? doPortal(finalTarget, el)
      : doPortal(document.body, el);
  }

  onMount(() => {
    if (current !== undefined && current !== null) {
      return portal(root, current);
    }
  });
</script>

{#if isOpen}
  <div
    bind:this={current}
    style="z-index: {zIndex}; {styles};"
    class="fixed {clazz}"
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
    on:mousewheel
  >
    <slot />
  </div>
{/if}

<style lang="scss">
  .fixed {
    position: fixed;
  }
</style>
