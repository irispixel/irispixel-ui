<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { observe_element } from '@irispixel/common-intersector';

  export let w = 32;
  export let h = 32;

  const dispatch = createEventDispatcher();

  let canvas: HTMLCanvasElement;

  function onIntersect(rect: DOMRectReadOnly) {
    dispatch('boundrect', {
      boundrect: rect
    });
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    dispatch('newcontext', {
      ctx: ctx
    });
    return observe_element(canvas, onIntersect);
  });
</script>

<canvas bind:this={canvas} width={w} height={h} on:click on:mousemove on:mousedown on:mouseup />
