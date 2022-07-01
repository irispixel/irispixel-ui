<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import RadioIcon from './RadioIcon.svelte';
  import RawRadioButton from './RawRadioButton.svelte';
  import { keyColor, keySize } from './RadioGroup.svelte';

  export let disabled = false;
  export let value = '';

  const colorState: Writable<string> = getContext(keyColor);
  const sizeState: Writable<string> = getContext(keySize);

  $: color = $colorState;
  $: size = $sizeState;

  // $: colorClass = color + '-label';
</script>

<RawRadioButton {disabled} {value}>
  <span slot="icon" let:itemDisabled let:checked>
    <RadioIcon disabled={itemDisabled} {checked} {color} {size} />
  </span>
  <span slot="text">
    <slot name="text" />
  </span>
</RawRadioButton>
