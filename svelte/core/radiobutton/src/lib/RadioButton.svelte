<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyChecked = 'ctx-ip-radio-checked';
  export const keySize = 'ctx-ip-radio-size';
  export const keyColor = 'ctx-ip-radio-color';
  export const keyDisabled = 'ctx-ip-radio-disabled';
</script>

<script lang="ts">
  import RadioIcon from './RadioIcon.svelte';
  import { uniqueId } from '@irispixel/common-idgen';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { keyGroup, keyName, keyGroupDisabled } from './RadioGroup.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let disabled = false;
  export let value = '';
  export let color = 'primary';
  export let size = 'sm';
  export let ariaLabel = '';
  export let zIndex = 1;

  const groupState: Writable<string> = getContext(keyGroup);
  const nameState: Writable<string> = getContext(keyName);
  const groupDisabledState: Writable<boolean> = getContext(keyGroupDisabled);

  if (groupState === null || groupState === undefined) {
    throw new Error(
      '<RadioGroup> parent element missing. <RadioButton> should be used as a child element inside a <RadioGroup> element.'
    );
  }
  $: group = $groupState;
  $: name = $nameState;
  $: groupDisabled = $groupDisabledState;

  const radio_id = uniqueId('ip-radio-');

  $: checked = group === value;
  $: itemDisabled = disabled || groupDisabled;

  let colorState = writable(color);
  let sizeState = writable(size);
  let disabledState = writable(itemDisabled);
  let checkedState = writable(checked);

  $: colorState.set(color);
  $: sizeState.set(size);
  $: disabledState.set(disabled);
  $: checkedState.set(checked);
  $: groupState.set(group);

  setContext(keyColor, colorState);
  setContext(keySize, sizeState);
  setContext(keyDisabled, disabledState);
  setContext(keyChecked, checkedState);

  function get_opacity_class(checked: boolean, disabled: boolean): string {
    return disabled ? 'disabled' : checked ? 'active' : 'unchecked';
  }

  $: opacityClass = get_opacity_class(checked, disabled);
</script>

<label for={radio_id} class="ip-checkbox-label ip-checkbox-padding {opacityClass}">
  <input
    id={radio_id}
    class="ip-input-hidden ip-checkbox-no-design"
    type="radio"
    bind:group
    {disabled}
    {name}
    {value}
    autocomplete="off"
    on:change
  />
  <slot name="icon">
    <RadioIcon />
  </slot>
  <slot name="text" />
</label>

<style lang="scss">
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/checkbox-label.scss';
</style>
