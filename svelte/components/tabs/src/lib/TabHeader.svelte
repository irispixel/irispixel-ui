<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let selected = false;
  export let color = 'primary';
  export let item = '';

  $: colorClass = selected ? 'border-' + color : '';
  $: selectedClass = selected ? 'selected' : 'unselected';
</script>

<span class="ip-tabheader-root {colorClass} {selectedClass}">
  {item}
</span>

<style lang="scss">
  @use '../../../../../css/src/tabheader.scss';
</style>
