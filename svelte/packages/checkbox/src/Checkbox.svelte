<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<RawCheckbox
  bind:checked={checked} 
  disabled={disabled}
  name={name} 
  value={value}
  color={color}
  sz={sz}
  darkmode={darkmode}
  ariaLabel={ariaLabel} 
  on:change>
  <slot name="icon" >    
    <CheckboxIcon />
  </slot>
  <slot name="text" />
</RawCheckbox>  
<script lang="ts">
  import RawCheckbox from './RawCheckbox.svelte';
  import CheckboxIcon from './CheckboxIcon.svelte';

  export let checked = false;
  export let disabled = false;
  export let color = 'primary';
  export let sz = 'sm';
  export let darkmode = false;

  export let name = '';
  export let value = '';
  export let group: Array<string> = [];
  export let ariaLabel = "";

</script>
