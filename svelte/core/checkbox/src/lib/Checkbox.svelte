<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import RawCheckbox from './RawCheckbox.svelte';
  import CheckboxIcon from './CheckboxIcon.svelte';

  export let indeterminate = false;
  export let checked = false;
  export let disabled = false;
  export let name = '';
  export let value = '';

  export let color = 'primary';
  export let size = 'sm';

  // $: colorClass = indeterminate || disabled ? '' : color + '-label';
</script>

<RawCheckbox bind:checked {indeterminate} {disabled} {name} {value}>
  <span slot="icon">
    <CheckboxIcon {disabled} {size} {color} {indeterminate} {checked} />
  </span>
  <span slot="text">
    <slot name="text" />
  </span>
</RawCheckbox>
