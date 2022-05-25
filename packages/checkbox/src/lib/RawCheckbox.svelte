<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<label class="ip-checkbox-root"  for={checkbox_id}>
  <input 
    id={checkbox_id} 
    class="l-input-hidden ip-checkbox-no-design"
    type="checkbox" 
    bind:checked={checked} 
    disabled={disabled}
    name={name}
    value={value}
    autocomplete="off"
    on:change />
  <slot />
</label>  
<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { uniqueId } from '@irispixel/common.idgen';
  import { keyChecked, keyColor, keyDarkmode, keyDisabled, keySize } from './checkboxstore';

  export let checked = false;
  export let disabled = false;
  export let color = 'primary';
  export let sz = 'sm';
  export let darkmode = false;
  export let value = '';

  export let name = '';
  export let group: Array<string> = [];
  export let ariaLabel = "";

  let checkedStore = writable(checked);
  $: checkedStore.set(checked);

 
  setContext(keyChecked, checkedStore);
  setContext(keyDisabled, disabled);
  setContext(keyColor, color);
  setContext(keySize, sz);
  setContext(keyDarkmode, darkmode);

  const checkbox_id = uniqueId("ip-checkbox");
</script>
<style lang="scss">
.ip-checkbox-root {
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
