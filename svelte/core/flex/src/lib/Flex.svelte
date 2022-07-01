<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export enum FlexDirection {
    Row = 'row',
    Column = 'column'
  }
</script>

<script lang="ts">
  let clazz = '';
  export { clazz as class };
  export let inline = false;
  export let direction: FlexDirection = FlexDirection.Row;

  $: displayClass = inline ? 'inline-flex' : 'flex';
  $: directionClass = 'flex-' + direction;
</script>

<div class="{displayClass} {directionClass} {clazz}">
  <slot />
</div>

<style lang="scss">
  @use '../../../../../css/src/_flex.scss';
</style>
