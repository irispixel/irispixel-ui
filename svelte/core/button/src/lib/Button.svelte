<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  function validate_variant(variant: string) {
    const supported_variants = ['flat', 'text', 'ghost', 'raised'];
    if (supported_variants.indexOf(variant) === -1) {
      throw new Error(
        `Error rendering Button: Unsupported variant '${variant}'. Supported variants: ${supported_variants}.`
      );
    }
  }
</script>

<script lang="ts">
  import TextButton from './TextButton.svelte';
  import GhostButton from './GhostButton.svelte';
  import RaisedButton from './RaisedButton.svelte';
  import FlatButton from './FlatButton.svelte';
  import type { SvelteComponent } from 'svelte';

  export let variant = 'flat';
  export let color = 'primary';
  export let size = 'xs';
  export let radius: string | null = null;
  export let icon: typeof SvelteComponent | undefined = undefined;
  export let disabled = false;
  export let type = 'button';

  $: validate_variant(variant);
</script>

{#if variant === 'text'}
  <TextButton {color} {size} {radius} {icon} {disabled} {type} on:click on:mouseenter on:mouseleave>
    <slot />
  </TextButton>
{:else if variant === 'ghost'}
  <GhostButton
    {color}
    {size}
    {radius}
    {icon}
    {disabled}
    {type}
    on:click
    on:mouseenter
    on:mouseleave
  >
    <slot />
  </GhostButton>
{:else if variant === 'raised'}
  <RaisedButton
    {color}
    {size}
    {radius}
    {icon}
    {disabled}
    {type}
    on:click
    on:mouseenter
    on:mouseleave
  >
    <slot />
  </RaisedButton>
{:else if variant === 'flat'}
  <FlatButton {color} {size} {radius} {icon} {disabled} {type} on:click on:mouseenter on:mouseleave>
    <slot />
  </FlatButton>
{/if}
