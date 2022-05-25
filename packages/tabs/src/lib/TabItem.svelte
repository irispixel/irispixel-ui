<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->

<li class="ip-tabitem-root" role="tab" 
aria-label={ariaLabel} aria-selected={selected} tabindex={selected ? 0: -1} 
on:click={onClick}>
  {#if $$slots.header}
    <slot name="header" selected={selected} />
  {:else}
    <TabHeader selected={selected}>
      <slot />
    </TabHeader>
  {/if}    
</li>
<script lang="ts">
  	import { getContext, onDestroy } from 'svelte';
    import type { Writable } from 'svelte/store';
    import { get } from 'svelte/store';
    import TabHeader from './TabHeader.svelte';
    import { keyTabContext } from './tabstore';

    export let ariaLabel = 'Sample TabItem';

    export let value = "";

    let valueWritable = getContext<Writable<string>>(keyTabContext);  
    let selected = get(valueWritable) === value;

    const unsubscribe = valueWritable.subscribe(
      (invalue: string) => {
        selected = invalue === value;
      }
    );
    onDestroy( () => {
      unsubscribe();
    });      

    function onClick(e: MouseEvent) {
      valueWritable.set(value);
    }
</script>
<style lang="scss">
  .ip-tabitem-root {
    float: left;
    cursor: pointer;
  }
</style>
