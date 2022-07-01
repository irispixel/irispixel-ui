<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
</script>

<script lang="ts">
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  import { CloseOnLeave, TriggerEvent } from '@irispixel/common-popover';
  import {
    DropdownListPosition,
    isArrayOfStrings,
    isAnArrayofDropdownItems,
    validate,
    getDropdownListStyles
  } from '@irispixel/common-dropdown';
  import type { DropdownItem } from '@irispixel/common-dropdown';
  import DropdownListItem from './DropdownListItem.svelte';

  export let selected: string | DropdownItem | null = null;
  export let color = 'primary';
  export let zIndex = 1;
  export let isOpen = false;
  export let width = '200px';
  export let items: Array<string> | Array<DropdownItem> = [];
  export let triggerEvent = TriggerEvent.Hover;
  export let content = '';
  export let placeholder = '';

  $: finalPlaceholder = placeholder && placeholder.length > 0 ? placeholder : 'Select ..';

  let closeOnLeave = CloseOnLeave.Popover;
  export let position = DropdownListPosition.Bottom;

  $: validate(items);

  function onSelect(id: string | DropdownItem) {
    selected = id;
  }
</script>

<Popover
  {zIndex}
  {triggerEvent}
  bind:isOpen
  {closeOnLeave}
  fnGetStyles={getDropdownListStyles(position)}
>
  <div slot="target" class="ip-dropdown-target-root" style="width: {width};">
    <span>
      <slot name="item">
        {#if selected}
          <DropdownListItem item={selected} disableHover={true} />
        {:else}
          <DropdownListItem item={finalPlaceholder} disableHover={true} />
        {/if}
      </slot>
    </span>
  </div>
  <div slot="popover">
    {#if items && Array.isArray(items)}
      <ul class="ip-dropdown-list-root">
        {#if isArrayOfStrings(items)}
          {#each items as item, _}
            <li on:click={() => onSelect(item)}>
              <slot {item}>
                <DropdownListItem {item} />
              </slot>
            </li>
          {/each}
        {:else if isAnArrayofDropdownItems(items)}
          {#each items as item, _}
            <li on:click={() => onSelect(item)}>
              <slot name="item">
                <DropdownListItem {item} />
              </slot>
            </li>
          {/each}
        {/if}
      </ul>
    {/if}
  </div>
</Popover>

<style lang="scss">
  @use '../../../../../css/src/dropdown.scss';

  .entry {
    border: 1px solid green;
  }
</style>
