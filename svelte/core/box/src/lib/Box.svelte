<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  let clazz = '';
  export { clazz as class };
</script>

<div class="l-box {clazz}">
  <slot />
</div>

<style lang="scss">
  .l-box {
    display: block;
  }
</style>
