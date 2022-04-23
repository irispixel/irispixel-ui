<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<label class="ip-radiobutton-root"  for={radiobutton_id}>
  <input 
    id={radiobutton_id} 
    class="l-input-hidden ip-checkbox-no-design"
    type="radio" 
    bind:group={group}
    disabled={disabled}
    name={name}
    autocomplete="off"
    value={value} 
    on:change />
  <slot />
</label>  
<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { uniqueId } from './../../../../common/idgen';
  import {keyColor, keySize, keyDisabled, keyDarkmode, keyGroup} from './radiostore';

  export let value = '';
  export let disabled = false;
  export let darkmode = false;
  export let name = '';
  export let group = "";
  export let ariaLabel = "";
  export let color = 'primary';
  export let sz = 'sm';

  let groupStore = writable(group);
  $: groupStore.set(group);

  const radiobutton_id = uniqueId("ip-radiobutton");

  setContext(keyColor, color);
  setContext(keyDarkmode, darkmode);
  setContext(keySize, sz);
  setContext(keyDisabled, disabled);
  setContext(keyGroup, groupStore);
</script>
<style lang="scss">
  .ip-radiobutton-root {
    position: relative;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  .ip-checkbox-no-design {
    appearance: none;
    outline: 0;
  }
</style>
