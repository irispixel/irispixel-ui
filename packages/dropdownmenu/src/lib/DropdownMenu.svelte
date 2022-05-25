<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script lang="ts">
  import {get_color_class} from './dropdownmenu-functions';
  import { CloseOnLeave, HAlign, Popover, TriggerEvent, VAlign } from '@irispixel/svelte.popover';

  export let selected = '';
  export let outline = false;
  let clazz  = '';
  export let color = '';
  export let ariaLabel = '';
  export let darkMode = false;
  export let zIndex = 1;
  export let isOpen = false;
  export let vAlign = VAlign.Bottom;
  export let hAlign = HAlign.Left;
  let closeOnLeave = CloseOnLeave.Popover;
  export {clazz as class};

	let styles = '';

  let classes: Array<string> = [];
  classes.push(get_color_class(color, outline, darkMode));
  
  let localClass = classes.join(" ");

</script>
<style lang="scss">
.l-dropdown-input-root {
  cursor: pointer;
  border: 1px solid red;
}
.l-dropdown-list-root {
  display: inline-block;
}
.l-dropdown-list-selected {
  width: 80px;
}
</style>
<Popover zIndex={zIndex} triggerEvent={TriggerEvent.Click} bind:isOpen={isOpen} 
  vAlign={vAlign} hAlign={hAlign}
  closeOnLeave={closeOnLeave}>
  <div  slot="target" class="l-dropdown-input-root">
    <span class="l-dropdown-list-selected"></span>
    <button
    aria-label={ariaLabel}
    type="button"
    class="l-button">
    drop
    </button>
  </div>
  <div slot="popover" class="l-dropdown-list-root">
    <slot />
  </div>
</Popover>
