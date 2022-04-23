<!--
  (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {get_color_class} from './numerictextbox-functions';
  
  let clazz  = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export {clazz as class};
  export let min = 1;
  export let max = 200;
  export let value = 100;
  export let step = 1;
  export let name = "numeric-text-box";
  export let maxlength = 3;

  const dispatch = createEventDispatcher();
  
  function onInput(event: Event) {
    if (value > max) {
      value = max;
    }
    if (value < min) {
      value = min;
    }
    dispatch('change', event);
  }

  function onIncrement() {
    if (value < max) {
      value++;
      dispatch('change');
    }
  }

  function onDecrement() {
    if (value > min) {
      value--;
      dispatch('change');
    }
  }

  function onKeyDown(event: KeyboardEvent) {
    dispatch('change', event);
  }

  function onKeyUp(event: KeyboardEvent) {
    dispatch('change', event);
  }

  let classes: Array<string> = [];
  // classes.push(get_color_class(color, darkMode));
  let localClass = classes.join(" ");
</script>
<style lang="scss">
.l-numeric-textbox-root {
  display: inline-flex;
  align-items:center;
  box-sizing: border-box;
  outline: 1px solid var(--lp-primary);
}

.l-counter {
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield; /* Firefox */

  &:focus, &:active {
    outline: none;
  }
  vertical-align: middle;
  box-sizing: border-box;
  color: var(--lp-primary);
  width: var(--lp-numeric-textbox-width, 100px);
  font-size: var(--lp-numeric-textbox-font-size, 2rem);
}

.l-div-buttons {
  float: right;
  height: 100%;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;  
  align-items: stretch;
  width: 2rem;
}
.l-numeric-textbox-button {
  display: block;
  cursor: pointer;
  text-align: center;
  height: var(--lp-numeric-textbox-btn-height, 25px);
  outline: 0;
  -webkit-tap-highlight-color: transparent;
}
.l-numeric-textbox-top {
}
.l-numeric-textbox-bottom {
}
</style>
<div class="l-numeric-textbox-root">
  <input type="number" pattern="[0-9]*" 
    class="l-reset-input l-counter {localClass} {clazz}"
    name={name} value={value} min={min} max={max}
    step={step}
    on:input={onInput} 
    maxlength={maxlength} />
  <span class="l-div-buttons">
    <span class="l-numeric-textbox-button l-numeric-textbox-top" on:click={(e) => onIncrement()}>^</span>
    <span class="l-numeric-textbox-button l-numeric-textbox-bottom" on:click={(e) => onDecrement()}> - </span>
  </span>
</div>