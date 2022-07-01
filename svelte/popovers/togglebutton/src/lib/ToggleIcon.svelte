<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let variant = 'ios';
  export let checked = false;
  export let size = 'sm';
  export let color = 'primary';
  export let disabled = false;

  $: checkedClass = checked ? 'checked-' + color : 'unchecked';
  $: checkedIconClass = checked ? 'checked-icon' : 'unchecked-icon';
  $: sizeClass = size + '-toggle';
  $: sizeIconClass = size + '-icon';
  $: variantClass = variant + '-toggle';
  $: variantIconClass = variant + '-toggle-icon';
  $: disabledClass = disabled ? 'disabled' : 'active';
</script>

<span class="slider-root {sizeClass}">
  <span class="slider {checkedClass} {variantClass} {disabledClass}" />
  <span class="icon {sizeIconClass} {checkedIconClass} {variantIconClass}" />
  {#if checked}
    <slot name="on" />
  {:else}
    <slot name="off" />
  {/if}
</span>

<style lang="scss">
  @use '../../../../../css/src/toggle-icon.scss';
</style>
