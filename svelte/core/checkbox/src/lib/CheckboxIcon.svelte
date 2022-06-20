<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { keyChecked, keyColor, keyDisabled, keyIndeterminate, keySize } from './Checkbox.svelte';

  const checkedState: Writable<boolean> = getContext(keyChecked);
  const szState: Writable<string> = getContext(keySize);
  const disabledState: Writable<boolean> = getContext(keyDisabled);
  const colorState: Writable<string> = getContext(keyColor);
  const indeterminateState: Writable<boolean> = getContext(keyIndeterminate);

  $: checked = $checkedState;
  $: sz = $szState;
  $: color = $colorState;
  $: disabled = $disabledState;
  $: indeterminate = $indeterminateState;

  $: colorClass = indeterminate
    ? 'indeterminate-' + color + '-checkbox'
    : !checked
    ? 'unchecked-color'
    : color + '-checkbox';
  $: hoverClass = indeterminate || disabled ? '' : 'hover-checkbox-' + color;
  $: szClass = 'sz-' + sz;
</script>

<span class="ip-checkbox-icon-root {szClass}">
  <span class="default-checkbox-icon {hoverClass} {colorClass} {szClass}" />
</span>

<style lang="scss">
  @use '../../../../../css/src/checkbox-icon.scss';
</style>
