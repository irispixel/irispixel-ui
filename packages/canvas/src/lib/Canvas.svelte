<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->

<script lang="ts">
 	import { createEventDispatcher, onMount } from 'svelte';
  import { observe } from '@irispixel/common.intersector';

  export let w = 32;
  export let h = 32;

  const dispatch = createEventDispatcher();

  let canvas: HTMLCanvasElement;

  function onIntersect(e: CustomEvent) {
    dispatch('boundrect', {
      boundrect: e.detail.entry.boundingClientRect
    });
	} 

  onMount(() => {
    const ctx = canvas.getContext('2d');
    dispatch('newcontext', {
        ctx: ctx
    });
  });
</script>
<canvas bind:this={canvas}
  width={w}
	height={h}
  use:observe
  on:intersect={onIntersect}
  on:click
  on:mousemove
  on:mousedown
  on:mouseup>
</canvas>  
