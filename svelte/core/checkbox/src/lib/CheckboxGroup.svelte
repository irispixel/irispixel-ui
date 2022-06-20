<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export const keyName = 'ctx-ip-checkbox-name';
  export const keyGroup = 'ctx-ip-checkbox-group';
  export const keyGroupDisabled = 'ctx-ip-radio-group-disabled';
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let group: Array<string> = [];
  export let name = '';

  let groupState = writable(group);
  let nameState = writable(name);

  $: groupState.set(group);
  $: nameState.set(name);

  setContext(keyName, nameState);
  setContext(keyGroup, groupState);
</script>

<slot />
