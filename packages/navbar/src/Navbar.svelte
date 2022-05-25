<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  let clazz = '';
  export { clazz as class };
</script>
<style lang="scss">
.lp-box {
  display: block;
}
</style>
<div class="lp-box {clazz}">
  <slot />
</div>