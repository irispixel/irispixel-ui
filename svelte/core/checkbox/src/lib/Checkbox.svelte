<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyChecked = 'ctx-ip-checkbox-checked';
  export const keySize = 'ctx-ip-checkbox-size';
  export const keyColor = 'ctx-ip-checkbox-color';
  export const keyDisabled = 'ctx-ip-checkbox-disabled';
  export const keyIndeterminate = 'ctx-ip-checkbox-indeterminate';
</script>

<script lang="ts">
  import CheckboxIcon from './CheckboxIcon.svelte';
  import { uniqueId } from '@irispixel/common-idgen';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let indeterminate = false;
  export let checked = false;
  export let disabled = false;
  export let value = '';
  export let color = 'primary';
  export let size = 'sm';
  export let name = '';
  export let ariaLabel = '';
  export let zIndex = 1;

  const checkbox_id = uniqueId('ip-checkbox-');

  let indeterminateState = writable(indeterminate);
  let checkedState = writable(checked);
  let disabledState = writable(disabled);
  let colorState = writable(color);
  let sizeState = writable(size);

  $: checkedState.set(checked);
  $: disabledState.set(disabled);
  $: colorState.set(color);
  $: sizeState.set(size);
  $: indeterminateState.set(indeterminate);

  setContext(keyChecked, checkedState);
  setContext(keyColor, colorState);
  setContext(keySize, sizeState);
  setContext(keyDisabled, disabledState);
  setContext(keyIndeterminate, indeterminateState);

  function get_opacity_class(checked: boolean, disabled: boolean): string {
    return disabled ? 'disabled' : checked ? 'active' : 'unchecked';
  }

  $: opacityClass = get_opacity_class(checked, disabled);
</script>

<label for={checkbox_id} class="ip-checkbox-label  {opacityClass}">
  <slot name="icon">
    <CheckboxIcon />
  </slot>
  <input
    id={checkbox_id}
    class="ip-input-hidden ip-checkbox-no-design"
    type="checkbox"
    bind:checked
    {disabled}
    {name}
    {value}
    autocomplete="off"
    on:change
  />
  <slot name="text" />
</label>

<style lang="scss">
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/checkbox-label.scss';
</style>
