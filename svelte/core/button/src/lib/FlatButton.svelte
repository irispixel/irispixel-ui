<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { get_radius_css, get_size_css, get_display_css } from './ButtonClass.svelte';
  export let color = 'primary';
  export let size = 'xs';
  export let radius = 'xs';
  export let icon: typeof SvelteComponent | undefined = undefined;
  export let disabled = false;
  export let type = 'button';

  function get_color_css(in_color: string) {
    return 'flat-' + in_color;
  }

  $: color_css = get_color_css(color);
  $: size_css = get_size_css(size);
  $: radius_css = get_radius_css(radius);
  $: display_css = get_display_css(icon);
  $: hover_css = disabled ? '' : 'hover-' + color;
  $: disabled_css = disabled ? 'disabled' : 'active';
</script>

<button
  {type}
  class="default-button {disabled_css} {display_css} {color_css} {size_css} {radius_css} {hover_css}"
  on:click
  on:mouseenter
  on:mouseleave
>
  <slot />
  <span class="space" />
  <svelte:component this={icon} />
</button>

<style lang="scss">
  @import '../../../../../css/src/colors.scss';
  @import '../../../../../css/src/disabled.scss';
  @import '../../../../../css/src/size.scss';
  @import '../../../../../css/src/button.scss';

  // Flat buttons
  .flat-primary {
    background-color: theme_color('primary');
    color: var(--ip-primary-text, white);
    border: none;
    transition: background-color 0.3s ease;
  }

  .hover-primary:hover,
  .hover-primary:focus {
    background-color: darken_theme_color('primary');
  }

  .flat-secondary {
    background-color: theme_color('secondary');
    color: var(--ip-secondary-text, white);
    border: none;
    transition: background-color 0.3s ease;
  }

  .hover-secondary:hover,
  .hover-secondary:focus {
    background-color: darken_theme_color('secondary');
  }
</style>
