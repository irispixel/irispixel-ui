<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { isADropdownItem } from '@irispixel/common-dropdown';
  import type { DropdownItem } from '@irispixel/common-dropdown';
  export let item: string | DropdownItem;
  export let disableHover = false;

  $: entryClass = disableHover ? '' : 'entry';
</script>

{#if item}
  {#if typeof item === 'string'}
    <div class="ip-dropdown-list-item {entryClass}">
      {item}
    </div>
  {:else if isADropdownItem(item)}
    <div class="ip-dropdown-list-item {entryClass}">
      {item.id}
    </div>
  {/if}
{/if}

<style lang="scss">
  @use '../../../../../css/src/dropdown-item.scss';
</style>
