<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { uniqueId } from '@irispixel/common-idgen';

  export let indeterminate = false;
  export let checked = false;
  export let disabled = false;

  export let name = '';
  export let value = '';

  const checkbox_id = uniqueId('ip-checkbox-');

  $: opacityClass = disabled ? 'disabled' : checked ? 'active' : 'unchecked';
</script>

<label for={checkbox_id} class="ip-checkbox-label  {opacityClass}">
  <slot name="icon" {disabled} {indeterminate} {checked}>
    Disabled - {disabled}
    {indeterminate}
    {checked}
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
  @use '../../../../../css/src/checkbox-label.scss';
</style>
