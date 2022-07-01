<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keySize = 'ctx-ip-radio-size';
  export const keyColor = 'ctx-ip-radio-color';
</script>

<script lang="ts">
  import RawRadioGroup from './RawRadioGroup.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  export let group = '';
  export let name = '';
  export let color = 'primary';
  export let size = 'xs';
  export let disabled = false;

  let colorState = writable(color);
  let szState = writable(size);

  $: colorState.set(color);
  $: szState.set(size);

  setContext(keyColor, colorState);
  setContext(keySize, szState);
</script>

<RawRadioGroup bind:group {name} {disabled}>
  <slot />
</RawRadioGroup>
