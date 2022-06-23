<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { observe } from '@irispixel/common-intersector';

  export let w = 32;
  export let h = 32;

  const dispatch = createEventDispatcher();

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    dispatch('newcontext', {
      ctx: ctx
    });
  });
</script>

<canvas
  bind:this={canvas}
  use:observe
  on:intersect
  width={w}
  height={h}
  on:click
  on:mousemove
  on:mousedown
  on:mouseup
/>
