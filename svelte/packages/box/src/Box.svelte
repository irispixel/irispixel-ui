<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  let clazz = '';
  export { clazz as class };
</script>
<style lang="scss">
.l-box {
  display: block;
}
</style>
<div class="l-box {clazz}">
  <slot />
</div>