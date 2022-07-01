<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Portal from '@svelte.core/portal/src/lib/Portal.svelte';
  import Button from '@svelte.core/button/src/lib/Button.svelte';
  let isOpen = false;

  function enter() {
    console.log('Entering');
    isOpen = true;
  }

  function leave() {
    console.log('Leaving');
    isOpen = false;
  }

  function click() {
    console.log('clicking');
    isOpen = true;
  }
</script>

<Button on:mouseenter={enter} on:mouseleave={leave} on:click={click}>Hover over me</Button>
<Portal {isOpen} on:focus on:click on:mouseover on:mousemove on:mouseup on:mousedown on:mousewheel>
  <span>Some Portal</span>
</Portal>
