<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { get_valign_class, get_halign_class, get_shape_class } from './badge-functions';
  export let content = '';
  let clazz = '';
  export { clazz as class };
  let localClazz = '';
  let classes: Array<string> = [];
  export let vAlign = 'middle';
  export let hAlign = 'right';
  export let shape = 'circle';
  export let dark_mode = false;

  classes.push(get_valign_class(vAlign));
  classes.push(get_halign_class(hAlign));
  classes.push(get_shape_class(shape, dark_mode));
  classes.push('l-bg-primary');

  localClazz = classes.join(' ');
</script>

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

<style lang="scss">
  .badge-root {
  }
  .badge {
  }
  .l-border-circle {
    shape-outside: circle();
    clip-path: circle();
    font-size: 100%;
    padding: 0.25rem;
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
