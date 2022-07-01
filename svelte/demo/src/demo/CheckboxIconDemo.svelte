<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import RawCheckbox from '@svelte.core/checkbox/src/lib/RawCheckbox.svelte';
  let icon_agree = false;
</script>

<RawCheckbox bind:checked={icon_agree}>
  <span slot="icon" let:checked> I&nbsp; {checked} </span>
  <span slot="text">
    icon_agree {icon_agree}
  </span>
</RawCheckbox>
