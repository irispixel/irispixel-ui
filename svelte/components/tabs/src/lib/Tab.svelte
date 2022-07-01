<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { keyTabContext } from './Tabs.svelte';

  export let value = '';

  let valueWritable = getContext<Writable<string>>(keyTabContext);

  $: selected = $valueWritable === value;
</script>

{#if selected}
  <slot />
{/if}
