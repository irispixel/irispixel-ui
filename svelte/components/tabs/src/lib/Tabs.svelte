<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { keyTabContext } from './tabstore';
  import { panelstore, keyPanelContext } from './panelstore';

  let clazz = '';
  export let ariaLabel = 'Sample Tabs';
  export let navLabel = 'Navigation ';
  export { clazz as class };

  export let value = '';

  let valueStore = writable(value);
  $: valueStore.set(value);

  setContext(keyTabContext, valueStore);
  setContext(keyPanelContext, panelstore);
</script>

<nav class="ip-tabs-nav-root" aria-label={navLabel}>
  <ul class="ip-tabs-root {clazz}" role="tablist" aria-label={ariaLabel}>
    <slot />
  </ul>
</nav>
<slot name="content" />

<style lang="scss">
  @import '../../../../../css/src/tabs.scss';
</style>
