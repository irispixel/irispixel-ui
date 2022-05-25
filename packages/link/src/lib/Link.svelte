<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  export let content = '';
  let clazz = '';
  export { clazz as class };
  let localClazz = '';
  let classes: Array<string> = [];
  export let vAlign = 'middle';
  export let hAlign = 'right';
  export let shape = "circle";
  export let dark_mode = false;
  function get_valign_class(valign: string): string {
    let valign_class = 'valign-middle';
    switch (valign) {
        case 'middle':
          valign_class = 'valign-middle';
          break;
        case 'baseline':
          valign_class = 'valign-baseline';
          break;
        case 'top':
          valign_class = 'valign-top';
          break;
        case 'bottom':
          valign_class = 'valign-bottom';
          break;
        default:
          // TODO: Throw an exception here
          valign_class = 'valign-baseline';
          break;
          
    }    
    return valign_class;
  }

  function get_halign_class(halign: string): string {
    let halign_class = "halign-right";
    switch (halign) {
      case 'left':
        halign_class = 'halign-left';
        break;
      case 'right':
        halign_class = 'halign-right';
        break;
      default:
        halign_class = 'halign-right';
        break;
    }
    return halign_class;
  }    

  function get_shape_class(shape: string, dark_mode: boolean): string {
    return 'l-border-circle';
  }


  classes.push(get_valign_class(vAlign));
  classes.push(get_halign_class(hAlign));
  classes.push(get_shape_class(shape, dark_mode));
  classes.push("l-bg-primary");

  localClazz = classes.join(" ");
</script>
<style lang="scss">
.badge-root {
  
}
.badge {
  
}
.l-border-circle {
  shape-outside: circle(70%);
  clip-path: circle();
  font-size: 100%;
  padding: 0.5rem;
}
.halign-left {
  transform: translate(-100%, 0);
}
.halign-right {
  transform: translate(100%, 0);
}
.valign-middle {
  vertical-align: middle;
}
.valign-baseline {
  vertical-align: baseline;
}
.valign-top {
  vertical-align: super;
}
.valign-bottom {
  vertical-align: sub;
}
</style>
<div class="badge-root">
  {#if hAlign === 'right'}
      <slot />
  {/if}
  <span class="badge {localClazz} {clazz}">
    {content} 
  </span>
  {#if hAlign === 'left'}
    <span>
      <slot />
    </span>
  {/if}
</div>
