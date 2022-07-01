<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import RawCheckbox from '@irispixel/svelte-checkbox/RawCheckbox.svelte';
  import ToggleIcon from './ToggleIcon.svelte';
  export let variant = '';
  export let checked = false;
  export let disabled = false;
  export let name = 'toggle';
  export let value = '';
  export let size = 'sm';
  export let color = 'primary';
</script>

<RawCheckbox bind:checked {disabled} {name} {value}>
  <span slot="icon" let:checked>
    <slot name="icon">
      <ToggleIcon {disabled} {size} {color} {checked} {variant} />
    </slot>
  </span>
  <span slot="text">
    <slot />
  </span>
</RawCheckbox>

<style>
</style>
