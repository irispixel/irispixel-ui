<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { keyChecked, keyColor, keyDisabled, keySize } from './RadioButton.svelte';

  const checkedState: Writable<string> = getContext(keyChecked);
  const szState: Writable<string> = getContext(keySize);
  const disabledState: Writable<boolean> = getContext(keyDisabled);
  const colorState: Writable<string> = getContext(keyColor);

  $: sz = $szState;
  $: color = $colorState;
  $: disabled = $disabledState;
  $: checked = $checkedState;
  $: colorClass = !checked ? 'unchecked-color' : color + '-checkbox';
  $: iconColorClass = !checked ? 'unchecked-color' : color + '-radio-icon';
  $: hoverClass = disabled ? '' : 'hover-checkbox-' + color;
  $: szClass = 'sz-' + sz;
</script>

<span class="ip-checkbox-icon-root {szClass}">
  <span class="default-radio-icon {hoverClass} {colorClass} {szClass}" />
  <span class="radio-icon-next {iconColorClass} {szClass}" />
</span>

<style lang="scss">
  @use '../../../../../css/src/radio-icon.scss';
</style>
