<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->

<script lang="ts">
    export let selected = false;
</script>
<style lang="scss">
 .ip-tabheader-root {
    border: 1px solid red;
    border-bottom-width: 0;
    margin: 0 10px 0 0;
    padding:2px 4px;
    border-color: red;
    border-style: solid;
  }
  .selected {
		border-bottom: 2px solid teal;
		color: #333;    
  }
</style>
<span class="ip-tabheader-root" class:selected="{selected}">
  <slot></slot>
</span>
