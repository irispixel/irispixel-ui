<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<RawRadio
  bind:group={group} 
  disabled={disabled}
  color={color}
  sz={sz}
  darkmode={darkmode}
  name={name} 
  value={value}
  ariaLabel={ariaLabel} 
  on:change>
  <slot name="icon" >    
    <RadioIcon />
  </slot>
  <slot name="text" />
</RawRadio>  
<script lang="ts">
  import RadioIcon from './RadioIcon.svelte';
  import  RawRadio from './RawRadio.svelte';

  export let value = '';
  export let disabled = false;
  export let darkmode = false;
  export let name = '';
  export let group = "";
  export let ariaLabel = "";
  export let color = 'primary';
  export let sz = 'sm';
</script>
