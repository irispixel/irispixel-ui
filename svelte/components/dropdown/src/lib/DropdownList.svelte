<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export interface DropdownItem {
    id: string;
  }

  export function isArrayOfStrings(obj: any): boolean {
    return Array.isArray(obj) && obj.every((item) => typeof item === 'string');
  }

  export function isADropdownItem(obj: any): obj is DropdownItem {
    return 'id' in obj;
  }

  export function isAnArrayofDropdownItems(obj: any): obj is DropdownItem {
    return Array.isArray(obj) && obj.every((item) => isADropdownItem(item));
  }

  export function validate(items: Array<any>) {
    if (items) {
      if (!Array.isArray(items)) {
        throw new Error(`Dropdown 'items' prop should be an array - ${typeof items}`);
      }
      if (isArrayOfStrings(items) || isAnArrayofDropdownItems(items)) {
        // Very good. Either an array of string or an array of DropdownItems
      } else {
        throw new Error(
          `Dropdown 'items' prop should be an array of strings or an array of 'DropdownItems's - ${typeof items}`
        );
      }
    }
  }
</script>

<script lang="ts">
  import Popover from '@irispixel/svelte-popover/Popover.svelte';
  import { CloseOnLeave, HAlign, VAlign, TriggerEvent } from '@irispixel/common-popover';
  import Button from '@irispixel/svelte-button/Button.svelte';

  export let selected = '';
  export let outline = false;
  let clazz = '';
  export let color = 'primary';
  export let ariaLabel = '';
  export let zIndex = 1;
  export let isOpen = false;
  export let vAlign = VAlign.Bottom;
  export let hAlign = HAlign.Left;
  export let items: Array<any> = [];
  export let triggerEvent = TriggerEvent.Hover;
  export let content = '';
  let closeOnLeave = CloseOnLeave.Popover;
  export { clazz as class };

  $: validate(items);
  let styles = '';

  let classes: Array<string> = [];

  let localClass = classes.join(' ');

  function onSelect(id: string) {
    console.log(`onSelect`);
    selected = id;
  }
</script>

<Popover {zIndex} {triggerEvent} bind:isOpen {vAlign} {hAlign} {closeOnLeave}>
  <div slot="target" class="ip-dropdown-input-root">
    <span class="ip-dropdown-list-selected" />
    <Button type="button" variant="text" {color}>{content}</Button>
  </div>
  <div slot="popover" class="ip-dropdown-list-container">
    {#if items && Array.isArray(items)}
      {#if isArrayOfStrings(items)}
        <ul class="ip-dropdown-list-root">
          {#each items as item, i}
            <li class="ip-dropdown-list-item" on:click={onSelect(item)}>
              <slot {item} id={item} />
            </li>
          {/each}
        </ul>
      {:else if isAnArrayofDropdownItems(items)}
        <ul class="ip-dropdown-list-root">
          {#each items as item, i}
            <li class="ip-dropdown-list-item" on:click={onSelect(item.id)}>
              <slot {item} id={item.id} />
            </li>
          {/each}
        </ul>
      {/if}
    {/if}
  </div>
</Popover>

<style lang="scss">
  @import '../../../../../css/src/colors.scss';

  .ip-dropdown-input-root {
    cursor: pointer;
    outline: none;
    display: inline-block;
  }
  .ip-dropdown-list-container {
    display: inline-block;
  }
  .ip-dropdown-list-root {
    list-style-type: none;
    margin: 0;
    background-color: transparent;
    color: inherit;
    padding: 0;
  }
  .ip-dropdown-list-item {
    cursor: pointer;
  }
  .ip-dropdown-list-item:hover,
  .ip-dropdown-list-item:focus {
    background-color: darken_theme_color('primary');
  }
</style>
