<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyGroupDisabled = 'ctx-ip-radio-group-disabled';
  export const keyName = 'ctx-ip-radio-name';
  export const keyGroup = 'ctx-ip-radio-group';
  export const keyOutGroup = 'ctx-ip-radio-group';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let group = '';
  export let name = '';
  export let disabled = false;

  let groupState = writable(group);
  let nameState = writable(name);
  let disabledState = writable(disabled);
  let outGroupState = writable(group);

  $: groupState.set(group);
  $: nameState.set(name);
  $: disabledState.set(disabled);
  $: outGroupState.set(group);
  $: group = $outGroupState;

  setContext(keyName, nameState);
  setContext(keyGroup, groupState);
  setContext(keyGroupDisabled, disabledState);
  setContext(keyOutGroup, outGroupState);
</script>

<slot />
