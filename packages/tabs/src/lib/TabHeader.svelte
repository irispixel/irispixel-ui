<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
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
