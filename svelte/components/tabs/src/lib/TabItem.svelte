<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import TabHeader from './TabHeader.svelte';
  import { keyTabContext } from './tabstore';

  export let ariaLabel = 'Sample TabItem';

  export let value = '';

  let valueWritable = getContext<Writable<string>>(keyTabContext);

  $: selected = $valueWritable === value;

  function onClick(e: MouseEvent) {
    valueWritable.set(value);
  }
</script>

<li
  class="ip-tabitem-root"
  role="tab"
  aria-label={ariaLabel}
  aria-selected={selected}
  tabindex={selected ? 0 : -1}
  on:click={onClick}
>
  {#if $$slots.header}
    <slot name="header" {selected} />
  {:else}
    <TabHeader {selected}>
      <slot />
    </TabHeader>
  {/if}
</li>

<style lang="scss">
  @import '../../../../../css/src/tabitem.scss';
</style>
