<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { uniqueId } from '@irispixel/common-idgen';
  import { keyGroup, keyName, keyGroupDisabled, keyOutGroup } from './RawRadioGroup.svelte';

  export let disabled = false;
  export let value = '';

  const groupState: Writable<string> = getContext(keyGroup);
  const nameState: Writable<string> = getContext(keyName);
  const groupDisabledState: Writable<boolean> = getContext(keyGroupDisabled);
  const outGroupState: Writable<string> = getContext(keyOutGroup);

  if (groupState === null || groupState === undefined) {
    throw new Error(
      '<RawRadioGroup> parent element missing. <RawRadioButton> should be used as a child element inside a <RawRadioGroup> element.'
    );
  }
  $: group = $groupState;
  $: name = $nameState;
  $: groupDisabled = $groupDisabledState;
  $: outGroupState.set(group);

  const radio_id = uniqueId('ip-radio-');

  $: checked = group === value;
  $: itemDisabled = disabled || groupDisabled;

  function get_opacity_class(checked: boolean, disabled: boolean): string {
    return disabled ? 'disabled' : checked ? 'active' : 'unchecked';
  }

  $: opacityClass = get_opacity_class(checked, disabled);
  // $: colorClass = color + '-label';
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
  <slot name="icon" {checked} {itemDisabled}>Radio Icon</slot>
  <slot name="text" />
</label>

<style lang="scss">
  @use '../../../../../css/src/checkbox-label.scss';
</style>
