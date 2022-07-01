<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  import { keyColor, keySize } from './CheckboxGroup.svelte';
</script>

<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import RawCheckboxItem from './RawCheckboxItem.svelte';
  import CheckboxIcon from './CheckboxIcon.svelte';

  export let disabled = false;
  export let value = '';

  const colorState: Writable<string> = getContext(keyColor);
  const sizeState: Writable<string> = getContext(keySize);

  $: color = $colorState;
  $: size = $sizeState;
</script>

<RawCheckboxItem {disabled} {value}>
  <span slot="icon" let:checked let:itemDisabled>
    <CheckboxIcon disabled={itemDisabled} {size} {color} {checked} />
  </span>
  <span slot="text">
    <slot />
  </span>
</RawCheckboxItem>
