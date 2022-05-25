<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
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