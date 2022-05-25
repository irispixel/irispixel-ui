<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  let clazz = '';
  export { clazz as class };
</script>
<style lang="scss">
.l-tabs-root {
  display: block;
  box-sizing: border-box;
}
</style>
<div class="l-tabs-root {clazz}">
  <slot />
</div>