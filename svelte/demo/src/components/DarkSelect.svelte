<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import RawCheckbox from '@svelte.core/checkbox/src/lib/RawCheckbox.svelte';
  import { darkThemeStore, triggerThemeStore } from '@svelte.core/theme/src/lib';

  $: darkmode = $darkThemeStore;

  function onSelect(e: Event) {
    darkThemeStore.set(darkmode);
    triggerThemeStore.set(true);
  }
</script>

<RawCheckbox bind:checked={darkmode} name={'dark'} value={'dark'} on:change={onSelect}>
  <span slot="icon"> Icon </span>
  <span slot="text">
    Value:{darkmode} - Store:{$darkThemeStore}
  </span>
</RawCheckbox>
