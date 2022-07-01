<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let size = 'xl';
  export let color = 'primary';
  export let disabled = false;
  export let checked = false;

  $: colorClass = checked ? 'checked-' + color : 'unchecked';
  $: hoverClass = disabled ? '' : 'hover-checkbox-' + color;
  $: tickColorClass = disabled ? '' : checked ? 'tick-checked' : '';
  $: szClass = 'sz-' + size;
</script>

<span class="ip-checkbox-icon-root circle {szClass} {hoverClass} {colorClass}">
  <span class="checkbox-tick {tickColorClass}" />
</span>

<style lang="scss">
  @use '../../../../../css/src/radio-icon.scss';
</style>
