<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { uniqueId } from '@irispixel/common-idgen';
  import { getContext } from 'svelte';
  import { keyGroup, keyName, keyGroupDisabled, keyOutGroup } from './RawCheckboxGroup.svelte';
  import type { Writable } from 'svelte/store';

  export let disabled = false;
  export let value = '';

  const groupState: Writable<Array<string>> = getContext(keyGroup);
  const nameState: Writable<string> = getContext(keyName);
  const groupDisabledState: Writable<boolean> = getContext(keyGroupDisabled);
  const outGroupState: Writable<Array<string>> = getContext(keyOutGroup);

  if (!(groupState && nameState && groupDisabledState)) {
    throw new Error(
      '<RawCheckboxGroup> parent element missing. <RawCheckboxItem> should be used as a child element inside a <RawCheckboxGroup>.'
    );
  }

  const checkbox_id = uniqueId('ip-checkbox-');

  $: group = $groupState;
  $: name = $nameState;
  $: groupDisabled = $groupDisabledState;
  $: $outGroupState = group;
  $: checked = isChecked(group, value);
  $: itemDisabled = disabled || groupDisabled;

  function isChecked(ingroup: Array<string>, invalue: string): boolean {
    console.log(`invalue: ${invalue},  ingroup: ${ingroup}`);
    return ingroup.includes(invalue);
  }

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
    disabled={itemDisabled}
    {name}
    {value}
    autocomplete="off"
    on:change
  />
  <slot name="icon" {checked} {itemDisabled}>Item Icon</slot>
  <slot name="text" />
  Group: {group}
</label>

<style lang="scss">
  @use '../../../../../css/src/checkbox-label.scss';
</style>
