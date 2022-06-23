<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script context="module" lang="ts">
  import type { SvelteComponent } from 'svelte';

  export function get_radius_css(in_radius: string | null) {
    return in_radius ? 'radius-' + in_radius : '';
  }

  export function get_size_css(insize: string) {
    return insize;
  }

  export function get_display_css(icon: typeof SvelteComponent | undefined) {
    return icon === undefined ? 'block-button' : 'flex-button';
  }
</script>
