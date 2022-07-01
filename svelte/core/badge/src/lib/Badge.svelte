<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let content = '';
  let clazz = '';
  export { clazz as class };
  export let vAlign = 'middle';
  export let hAlign = 'right';
  export let shape = 'circle';

  $: vAlignClass = 'valign-' + vAlign;
  $: hAlignClass = 'halign-' + hAlign;
  $: shapeClass = shape === 'circle' ? 'l-border-circle' : 'l-border-circle';
</script>

<div class="badge-root">
  {#if hAlign === 'right'}
    <slot />
  {/if}
  <span class="badge-primary {vAlignClass} {hAlignClass} {shapeClass} {clazz}">
    {content}
  </span>
  {#if hAlign === 'left'}
    <span>
      <slot />
    </span>
  {/if}
</div>

<style lang="scss">
  @use '../../../../../css/src/badge.scss';
</style>
