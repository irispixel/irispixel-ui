<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let checked = false;
  export let size = 'sm';
  export let color = 'primary';
  export let disabled = false;
  export let indeterminate = false;

  $: colorClass = checked || indeterminate ? 'checked-' + color : 'unchecked';
  $: hoverClass = indeterminate || disabled ? '' : 'hover-checkbox-' + color;
  $: tickColorClass = indeterminate
    ? 'tick-indeterminate'
    : disabled
    ? ''
    : checked
    ? 'tick-checked'
    : '';
  $: szClass = 'sz-' + size;
</script>

<span class="ip-checkbox-icon-root {szClass} {hoverClass} {colorClass}">
  <span class="checkbox-tick {tickColorClass}" />
</span>

<style lang="scss">
  @use '../../../../../css/src/checkbox-icon.scss';
</style>
