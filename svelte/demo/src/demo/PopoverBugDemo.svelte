<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { CloseOnLeave, PopoverPosition } from '@irispixel/common-popover';
  import PopoverDemo from './PopoverDemo.svelte';
</script>

<h3>Popover Bug</h3>

<div class="container">
  <div class="space" />

  <PopoverDemo position={PopoverPosition.TopLeft} />

  <PopoverDemo position={PopoverPosition.BottomRight} closeOnLeave={CloseOnLeave.Popover} />
</div>

<style>
  .container {
    min-height: 140vh;
  }

  .space {
    min-height: 100vh;
  }
</style>
