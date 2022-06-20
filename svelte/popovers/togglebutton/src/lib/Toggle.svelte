<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Checkbox from '@irispixel/svelte-checkbox/Checkbox.svelte';
  import ToggleIcon from './ToggleIcon.svelte';
  export let variant = '';
  export let checked = false;
  export let disabled = false;
  export let name = '';
  export let value = '';
  export let group: Array<string> = [];
  export let ariaLabel = '';
  export let size = 'sm';
  export let color = 'primary';
</script>

<Checkbox bind:checked {disabled} {name} {value} {color} {size} {ariaLabel} on:change>
  <ToggleIcon {variant} slot="icon" />
  <span slot="text">
    <slot />
  </span>
</Checkbox>

<style>
</style>
