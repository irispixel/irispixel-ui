<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Input from '@svelte.core/input/src/lib/Input.svelte';
  let value = 'universe';
</script>

<Input bind:value />
<span>h:{value}</span>
