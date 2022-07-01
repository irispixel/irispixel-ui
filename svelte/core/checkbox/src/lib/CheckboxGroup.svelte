<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyColor = 'ctx-ip-checkboxgroup-color';
  export const keySize = 'ctx-ip-checkboxgroup-size';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import RawCheckboxGroup from './RawCheckboxGroup.svelte';

  export let group: Array<string> = [];
  export let name = '';
  export let disabled = false;
  export let color = 'primary';
  export let size = 'xs';

  let colorState = writable(color);
  let szState = writable(size);

  $: colorState.set(color);
  $: szState.set(size);

  setContext(keyColor, colorState);
  setContext(keySize, szState);
</script>

<RawCheckboxGroup bind:group {name} {disabled}>
  <slot />
</RawCheckboxGroup>
