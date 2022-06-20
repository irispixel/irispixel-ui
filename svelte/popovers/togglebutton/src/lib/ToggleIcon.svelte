<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import {
    keyChecked,
    keyColor,
    keyDisabled,
    keySize,
    keyIndeterminate
  } from '@irispixel/svelte-checkbox/Checkbox.svelte';

  const checkedState: Writable<boolean> = getContext(keyChecked);
  const szState: Writable<string> = getContext(keySize);
  const disabledState: Writable<boolean> = getContext(keyDisabled);
  const colorState: Writable<string> = getContext(keyColor);
  const indeterminateState: Writable<boolean> = getContext(keyIndeterminate);

  export let variant = 'ios';

  $: checked = $checkedState;
  $: sz = $szState;
  $: color = $colorState;
  $: disabled = $disabledState;

  $: checkedClass = checked ? 'checked-' + color : 'unchecked';
  $: checkedIconClass = checked ? 'checked-icon' : 'unchecked-icon';
  $: colorClass = color + '-toggle';
  $: sizeClass = sz + '-toggle';
  $: sizeIconClass = sz + '-icon';
  $: variantClass = variant + '-toggle';
  $: variantIconClass = variant + '-toggle-icon';
  $: disabledClass = disabled ? 'disabled' : 'active';
</script>

<div class="slider-root {sizeClass}">
  <span class="slider {colorClass}  {checkedClass} {variantClass} {disabledClass}" />
  <span class="icon {sizeIconClass} {checkedIconClass} {variantIconClass}" />
  {#if checked}
    <slot name="on" />
  {:else}
    <slot name="off" />
  {/if}
</div>

<style lang="scss">
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/toggle-icon.scss';
</style>
