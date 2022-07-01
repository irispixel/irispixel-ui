<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyGroup = 'ctx-ip-checkboxgroup-group';
  export const keyName = 'ctx-ip-checkboxgroup-name';
  export const keyGroupDisabled = 'ctx-ip-checkboxgroup-disabled';
  export const keyOutGroup = 'ctx-ip-checkboxgroup-outgroup';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let group: Array<string> = [];
  export let name = '';
  export let disabled = false;

  let groupState = writable(group);
  let nameState = writable(name);
  let disabledState = writable(disabled);
  let outGroupState = writable(group);

  $: groupState.set(group);
  $: nameState.set(name);
  $: disabledState.set(disabled);
  // $: group = $outGroupState;
  $: console.log($outGroupState);

  setContext(keyGroup, groupState);
  setContext(keyName, nameState);
  setContext(keyGroupDisabled, disabledState);
  setContext(keyOutGroup, outGroupState);
</script>

<slot />
