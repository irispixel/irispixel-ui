<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  export let selected = false;
</script>

<span class="ip-tabheader-root" class:selected>
  <slot />
</span>

<style lang="scss">
  @import '../../../../../css/src/tabheader.scss';
</style>
