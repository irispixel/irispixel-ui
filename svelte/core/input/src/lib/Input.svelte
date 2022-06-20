<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { uniqueId } from '@irispixel/common-idgen';
  export let value = '';
  export let color = 'primary';
  export let size = 'xs';
  export let radius = 'xs';
  export let icon: typeof SvelteComponent | undefined = undefined;
  export let disabled = false;
  export let variant = 'alpha';

  export let label = '';

  $: color_css = color;
  $: size_css = size;
  $: radius_css = 'radius-' + radius;
  $: display_css = icon === undefined ? 'block-button' : 'flex-button';
  $: disabled_css = disabled ? 'disabled' : 'active';
  $: hover_css = disabled ? '' : 'hover-' + color;

  const input_id = uniqueId('ip-textfield-');
</script>

<label for={input_id}>{label}</label>
<input
  id={input_id}
  bind:value
  type="text"
  class="default-input {disabled_css} {display_css} {color_css} {size_css} {radius_css} {hover_css}"
  {disabled}
  on:click
  on:input
  on:mouseenter
  on:mouseleave
/>

<style lang="scss">
  @import '../../../../../css/src/colors.scss';
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/size.scss';
  @import '../../../../../css/src/input.scss';
  @import '../../../../../css/src/shadow.scss';

  // Input
  .primary {
  }

  .hover-primary:hover,
  .hover-primary:focus {
    border-color: theme_color('primary');
    box-shadow: shadow('primary');
  }

  .secondary {
  }

  .hover-secondary:hover,
  .hover-secondary:focus {
    border-color: theme_color('secondary');
    box-shadow: shadow('secondary');
  }
</style>
