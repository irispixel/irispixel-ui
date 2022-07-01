<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyTabContext = 'ctx-ip-tab-context';
  export const keyTabColor = 'ctx-ip-tab-color';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import TabHeaders from './TabHeaders.svelte';
  import TabHeader from './TabHeader.svelte';

  let clazz = '';
  export let ariaLabel = 'Sample Tabs';
  export let navLabel = 'Navigation ';
  export { clazz as class };
  export let color = 'primary';

  export let value = '';
  export let items: Array<string> = [];

  let valueStore = writable(value);
  $: valueStore.set(value);

  let colorStore = writable(color);
  $: colorStore.set(color);


  setContext(keyTabContext, valueStore);
  setContext(keyTabColor, colorStore);
</script>

<nav class="ip-tabs-nav-root" aria-label={navLabel}>
  <ul class="ip-tabs-root {clazz}" role="tablist" aria-label={ariaLabel}>
    {#each items as item}
      <TabHeaders {item} let:selected>
        <slot name="header" {selected} {item} {color}>
          <TabHeader {item} {selected} {color} />
        </slot>
      </TabHeaders>
    {/each}
  </ul>
  <slot />
</nav>

<style lang="scss">
  @use '../../../../../css/src/tabs.scss';
</style>
