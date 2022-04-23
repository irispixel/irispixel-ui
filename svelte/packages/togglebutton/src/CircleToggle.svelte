<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<span class="ip-toggle-size {sizeClass} ip-toggle-slider   ip-toggle-ios  {darkmodeToggleClass} {checkedClass} {disabledClass} "></span> 
<span class="ip-toggle-size {sizeClass} ip-toggle-color ip-toggle-slider-icon ip-toggle-ios-icon {darkmodeIconClass} {checkedIconClass} {disabledIconClass}">
  {#if checked}
  <slot name="on" />
  {:else}
  <slot name="off" />
  {/if}  
</span>    
<script lang="ts">

  import { getContext, onDestroy } from 'svelte';
  import { get } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import { keyChecked, keyColor, keyDarkmode, keyDisabled, keySize } from './../../checkbox';

  let checkedStore = getContext<Writable<boolean>>(keyChecked);
  let disabled = getContext<boolean>(keyDisabled);
  let color = getContext<string>(keyColor);
  let sz = getContext<string>(keySize);
  let darkmode = getContext<boolean>(keyDarkmode);

  let checked = get(checkedStore);

  const unsubscribe = checkedStore.subscribe( (value: boolean) => {
      checked = value;
  });
  onDestroy( () => {
      unsubscribe();
  });  
  
  function get_size_class(sz: string) {
    let css_class = "ip-toggle-sz-small";
    switch(sz) {
        case 'md':
          css_class = 'ip-toggle-sz-medium';
          break;
        case 'lg':
          css_class =  'ip-toggle-sz-large';
          break;
        case 'sm':
        default:
          css_class =  'ip-toggle-sz-small';
          break;
    }
    return css_class;
  }  

  $: sizeClass = get_size_class(sz);  
  $: colorClass = 'ip-toggle-checked-' + color;
  $: disabledClass = disabled ? 'ip-toggle-disabled': '';
  $: disabledIconClass = disabled ? 'ip-toggle-disabled-icon': '';

  $: darkmodeIconClass = darkmode ? 'ip-toggle-darkmode-icon': '';
  $: darkmodeToggleClass = darkmode ? 'ip-toggle-darkmode' : ''; 
  
  $: checkedClass = checked ? "ip-toggle-checked " + colorClass : "";
  $: checkedIconClass = checked ? "ip-toggle-checked-icon  " + colorClass : "";

</script>

<style lang="scss">

  // Disabled
  .ip-toggle-disabled {
    --ip-toggle-bg-alpha: 0.4;
    --ip-toggle-bg-color-alpha: 0.15; 
  }
  
  .ip-toggle-disabled-icon {
    --ip-toggle-color-alpha: 0.5;
  }
  
  // Darkmode
  
  .ip-toggle-darkmode {
    // --ip-toggle-bg-alpha: 0.6;
    --ip-toggle-bg-color-alpha: 0.6;
    // --ip-toggle-color-alpha: 1;
  }
  
  
  .ip-toggle-darkmode-icon {
    --ip-toggle-color: rgb(255, 255, 255, 0.6);
  }
  
  
  // Slider Icon
  .ip-toggle-slider-icon {
      position: absolute;
  
      left: calc(var(--ip-toggle-circle-gap) * 1rem);
      // left: 0;
      height: calc(var(--ip-toggle-inner-radius) * 0.9rem);
      width: calc(var(--ip-toggle-inner-radius) * 0.9rem);
  
      background-color:  var(--ip-toggle-color, white);
      transition: var(--ip-toggle-transition-secs, 0.4s);
  }
  
  
  .ip-toggle-checked-icon {
    transform: translateX( calc(var(--ip-toggle-inner-radius) * 1rem) );
  }
  
  
  .ip-toggle-ios-icon {
    border-radius: 50%;
  }
  
  /* ios style */
  .ip-toggle-ios {
      border-radius: calc(var(--ip-toggle-outer-radius) * 1rem);
  }
  
  
  .ip-toggle-slider {
    float : left;
    outline: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(var(--ip-toggle-bg-color, (224, 224, 224) ), var(--ip-toggle-bg-alpha, 1));
    width: calc(var(--ip-toggle-width) * 1rem);
    height: calc(var(--ip-toggle-inner-radius) * 1rem);
  
    margin-right: var(--ip-toggle-icon-margin-right, 1rem);
  
    transition: var(--ip-toggle-transition-secs, 0.4s);
    -webkit-tap-highlight-color: transparent;
  
    &:focus {
      outline: none;
      outline-width: 0;
      box-shadow: none;
    }
  
  
  }
  
  
  .ip-toggle-checked {
    background-color: var(--ip-toggle-checked-bg-color);
  }
  
  // color themes normal
  .ip-toggle-checked-primary {
    --ip-toggle-color: rgba(var(--lp-primary), var(--ip-toggle-color-alpha, 1));
    --ip-toggle-checked-bg-color: rgba( var(--lp-primary), var(--ip-toggle-bg-color-alpha, 0.25));
    
  }
  
  .ip-toggle-checked-secondary {
    --ip-toggle-color: rgba(var(--lp-secondary), var(--ip-toggle-color-alpha, 1));
    --ip-toggle-checked-bg-color: rgba( var(--lp-secondary), var(--ip-toggle-bg-color-alpha, 0.25));
  }
  
  .ip-toggle-checked-tertiary {
    --ip-toggle-color: rgba(var(--lp-tertiary), var(--ip-toggle-color-alpha, 1));
    --ip-toggle-checked-bg-color: rgba( var(--lp-tertiary), var(--ip-toggle-bg-color-alpha, 0.25));
  }
  
  .ip-toggle-checked-quaternary {
    --ip-toggle-color: rgba(var(--lp-quaternary), var(--ip-toggle-color-alpha, 1));
    --ip-toggle-checked-bg-color: rgba( var(--lp-quaternary), var(--ip-toggle-bg-color-alpha, 0.25));
  }
  
  .ip-toggle-checked-quinary {
    --ip-toggle-color: rgba(var(--lp-quinary), var(--ip-toggle-color-alpha, 1));
    --ip-toggle-checked-bg-color: rgba( var(--lp-quinary), var(--ip-toggle-bg-color-alpha, 0.25));
  }
  
  // Size css classes
  
  .ip-toggle-sz-small {
    --ip-toggle-outer-radius: 2;
  }
  
  .ip-toggle-sz-medium {
    --ip-toggle-outer-radius: 4;
  }
  
  .ip-toggle-sz-large {
    --ip-toggle-outer-radius: 6;
  }
  
  .ip-toggle-color {
    --ip-toggle-checked-bg-color: #dddddd;
  }
  
  // Dynamically computed variables. Need not be assigned.
  .ip-toggle-size {
    --ip-toggle-inner-radius: calc(var(--ip-toggle-outer-radius, 2) * var(--ip-toggle-inner-radius-ratio, 0.8));
    --ip-toggle-circle-gap: calc((1 - var(--ip-toggle-inner-radius-ratio, 0.8)) * var(--ip-toggle-outer-radius, 2)/2);
    --ip-toggle-width: calc(var(--ip-toggle-outer-radius, 2) * 1.75);  
  }
</style>
