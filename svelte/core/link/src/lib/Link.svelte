<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let variant = 'text';
  export let color = 'primary';
  export let size = 'xs';
  export let radius = 'xs';
  export let icon: typeof SvelteComponent | undefined = undefined;
  export let disabled = false;
  export let href = '';

  function get_radius_css(in_radius: string) {
    switch (in_radius) {
      case 'xl':
        return 'radius-xl';
      case 'lg':
        return 'radius-lg';
      case 'sm':
        return 'radius-sm';
      case 'md':
      default:
        return 'radius-md';
    }
  }

  function get_size_css(insize: string) {
    switch (insize) {
      case 'xl':
        return 'xl';
      case 'lg':
        return 'lg';
      case 'sm':
        return 'sm';
      case 'md':
      default:
        return 'md';
    }
  }

  function get_color_css(in_variant: string, in_color: string, in_disabled: boolean) {
    switch (in_variant) {
      case 'ghost':
        return 'ghost-' + in_color + (in_disabled ? '-disabled' : '');
      case 'text':
        return 'text-' + in_color + (in_disabled ? '-disabled' : '');
      case 'raised':
        return 'raised-' + in_color + (in_disabled ? '-disabled' : '');
      case 'flat':
      default:
        return 'flat-' + in_color + (in_disabled ? '-disabled' : '');
    }
  }

  function get_display_css(icon: typeof SvelteComponent | undefined) {
    if (icon === undefined) {
      return 'block-button';
    } else {
      return 'flex-button';
    }
  }

  $: color_css = get_color_css(variant, color, disabled);
  $: size_css = get_size_css(size);
  $: radius_css = get_radius_css(radius);
  $: display_css = get_display_css(icon);
  $: cursor_css = disabled ? 'pointer-disabled' : 'pointer';
  $: opacity_css = disabled ? 'disabled' : 'active';
</script>

<a
  class="default {opacity_css} {display_css} {cursor_css} {color_css} {size_css} {radius_css}"
  on:click
  on:mouseenter
  on:mouseleave
  {href}
>
  <slot />
  <span class="space" />
  <svelte:component this={icon} />
</a>

<style lang="scss">
  @import '../../../../../css/src/colors.scss';

  .default {
    box-shadow: none;
    -webkit-appearance: none;
    outline: none;
    font: inherit;
    box-sizing: border-box;
    text-decoration: none;
  }

  .disabled {
    opacity: 0.6;
  }

  .active {
    opacity: 1;
  }

  .block-button {
    display: inline-block;
  }

  .flex-button {
    display: inline-flex;
    align-items: center;
  }

  .pointer {
    cursor: pointer;
  }

  .pointer-disabled {
    cursor: not-allowed;
  }

  .space {
    min-width: 1rem;
  }

  /// Size css
  .xs {
    font-size: 0.25rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  .md {
    font-size: 1rem;
    padding: 1rem 1rem 1rem 1rem;
  }

  .lg {
    font-size: 1.5rem;
    padding: 1rem 1.5rem 1rem 1rem;
  }

  .xl {
    font-size: 2rem;
    padding: 2rem 2rem 2rem 2rem;
  }

  // Radius
  .radius-xs {
    border-radius: 0.25rem;
  }

  .radius-sm {
    border-radius: 0.5rem;
  }

  .radius-lg {
    border-radius: 1rem;
  }

  .radius-xl {
    border-radius: 2rem;
  }

  // Flat buttons
  .flat-primary {
    background-color: theme_color('primary');
    color: var(--ip-primary-text, white);
    border: none;
    transition: background-color 0.3s ease;
  }

  .flat-primary:hover,
  .flat-primary:focus {
    background-color: darken_theme_color('primary');
  }

  .flat-secondary {
    background-color: theme_color('secondary');
    color: var(--ip-secondary-text, white);
    border: none;
    transition: background-color 0.3s ease;
  }

  .flat-secondary:hover,
  .flat-secondary:focus {
    background-color: darken_theme_color('secondary');
  }

  // Ghost buttons
  .ghost-primary {
    border: 1px solid theme_color('primary');
    background: none;
    color: theme_color('primary');
    transition: background-color 0.5s ease;
    background-color: inherit;
  }

  .ghost-primary:hover,
  .ghost-primary:focus {
    background-color: theme_color('primary');
    color: var(--ip-primary-text, white);
  }

  .ghost-secondary {
    border: 1px solid theme_color('secondary');
    background: none;
    color: theme_color('secondary');
    transition: background-color 0.3s ease;
    background-color: inherit;
  }

  .ghost-secondary:hover,
  .ghost-secondary:focus {
    background-color: theme_color('secondary');
    color: var(--ip-secondary-text, white);
  }

  // Text buttons
  .text-primary {
    border: none;
    background: none;
    color: theme_color('primary');
    transition: background-color 0.5s ease;
    background-color: inherit;
  }

  .text-primary:hover,
  .text-primary:focus {
    background-color: theme_color('primary');
    color: var(--ip-primary-text, white);
  }

  .text-secondary {
    border: none;
    background: none;
    color: theme_color('secondary');
    transition: background-color 0.3s ease;
    background-color: inherit;
  }

  .text-secondary:hover,
  .text-secondary:focus {
    background-color: theme_color('secondary');
    color: var(--ip-secondary-text, white);
  }

  // Raised buttons
  .raised-primary {
    border: none;
    background: none;
    color: theme_color('primary');
    transition: background-color 0.5s ease;
    background-color: inherit;
  }

  .raised-primary:hover,
  .raised-primary:focus {
    background-color: theme_color('primary');
    color: var(--ip-primary-text, white);
  }

  .raised-secondary {
    border: none;
    background: none;
    color: theme_color('secondary');
    transition: background-color 0.3s ease;
    background-color: inherit;
  }

  .raised-secondary:hover,
  .raised-secondary:focus {
    background-color: theme_color('secondary');
    color: var(--ip-secondary-text, white);
  }
</style>
