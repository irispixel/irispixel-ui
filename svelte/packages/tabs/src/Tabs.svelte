<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from 'svelte/store';
  import { keyTabContext } from './tabstore';
  import { panelstore, keyPanelContext } from './panelstore';
  
  let clazz = '';
  export let ariaLabel = 'Sample Tabs';
  export let navLabel = "Navigation ";
  export { clazz as class };

  export let value = "";

  let valueStore = writable(value);
  $: valueStore.set(value);

  setContext(keyTabContext, valueStore);
  setContext(keyPanelContext, panelstore);

</script>
<style lang="scss">
.ip-tabs-nav-root {
  display: block;
  box-sizing: border-box;
}
.ip-tabs-root {
  display: block;
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
<nav class="ip-tabs-nav-root" aria-label={navLabel}>
  <ul class="ip-tabs-root {clazz}" role="tablist" aria-label={ariaLabel}>
    <slot />
  </ul>
</nav>
<slot name="content" />