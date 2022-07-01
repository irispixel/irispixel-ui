<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import DropdownList from '@svelte.components/dropdown/src/lib/DropdownList.svelte';
  import { DropdownListPosition } from '@irispixel/common-dropdown';
  export let items = [];
  export let position = DropdownListPosition.Bottom;
  let selected = '';
</script>

<div class="demo-unit">
  <span>Selected: {selected}</span>
  <div class="row">
    <span>Fairly long span to provide some left space</span>
    <div>
      <DropdownList {items} {position} let:item let:id bind:selected content="Dropdown Menu" />
    </div>
  </div>
</div>

<style lang="scss">
  .demo-unit {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
