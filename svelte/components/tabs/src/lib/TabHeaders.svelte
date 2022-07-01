<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { keyTabContext } from './Tabs.svelte';

  export let item = '';
  export let disabled = false;
  export let ariaLabel = '';

  let valueWritable = getContext<Writable<string>>(keyTabContext);

  $: selected = $valueWritable === item;
  $: disabledClass = disabled ? 'disabled' : 'active';

  function onClick() {
    valueWritable.set(item);
  }
</script>

<li
  class="{disabledClass} ip-tabitem-root"
  role="tab"
  aria-label={ariaLabel}
  aria-selected={selected}
  tabindex={selected ? 0 : -1}
  on:click={(_) => (!disabled ? onClick() : '')}
>
  <slot {selected} />
</li>

<style lang="scss">
  @use '../../../../../css/src/tabs.scss';
</style>
