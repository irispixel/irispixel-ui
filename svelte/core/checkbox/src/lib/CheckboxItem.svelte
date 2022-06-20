<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import CheckboxIcon from './CheckboxIcon.svelte';
  import { uniqueId } from '@irispixel/common-idgen';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { keyGroup, keyName, keyGroupDisabled } from './CheckboxGroup.svelte';
  import { keyColor, keyDisabled, keySize, keyChecked } from './Checkbox.svelte';
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
      '<CheckboxGroup> parent element missing. <CheckboxItem> should be used as a child element inside a <CheckboxGroup>.'
    );
  }
  $: group = $groupState;
  $: name = $nameState;
  $: groupDisabled = $groupDisabledState;

  const checkbox_id = uniqueId('ip-checkbox-');

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

<label for={checkbox_id} class="ip-checkbox-label ip-checkbox-padding {opacityClass}">
  <input
    id={checkbox_id}
    class="ip-input-hidden ip-checkbox-no-design"
    type="checkbox"
    bind:group
    {disabled}
    {name}
    {value}
    autocomplete="off"
    on:change
  />
  <slot name="icon">
    <CheckboxIcon />
  </slot>
  <slot name="text" />
</label>

<style lang="scss">
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/checkbox-label.scss';
</style>
