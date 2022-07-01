<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  let clazz = '';
  export { clazz as class };
  export let min = 1;
  export let max = 200;
  export let value = 100;
  export let step = 1;
  export let name = 'numeric-text-box';
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
  let localClass = classes.join(' ');
</script>

<div class="l-numeric-textbox-root">
  <input
    type="number"
    pattern="[0-9]*"
    class="l-reset-input l-counter {localClass} {clazz}"
    {name}
    {value}
    {min}
    {max}
    {step}
    on:input={onInput}
    {maxlength}
  />
  <span class="l-div-buttons">
    <span class="l-numeric-textbox-button l-numeric-textbox-top" on:click={(_) => onIncrement()}
      >^</span
    >
    <span class="l-numeric-textbox-button l-numeric-textbox-bottom" on:click={(_) => onDecrement()}>
      -
    </span>
  </span>
</div>

<style lang="scss">
  @use '../../../../../css/src/numerictextbox.scss';
</style>
