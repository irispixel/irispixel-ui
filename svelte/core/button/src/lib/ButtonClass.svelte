<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script context="module" lang="ts">
  import type { SvelteComponent } from 'svelte';

  export function get_radius_css(in_radius: string) {
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

  export function get_size_css(insize: string) {
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

  export function get_display_css(icon: typeof SvelteComponent | undefined) {
    if (icon === undefined) {
      return 'block-button';
    } else {
      return 'flex-button';
    }
  }
</script>
