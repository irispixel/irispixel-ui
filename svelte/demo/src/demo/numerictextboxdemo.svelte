<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
    import NumericTextbox from '@svelte.core/numerictextbox/src/lib/NumericTextbox.svelte';
    import Box from '@svelte.core/box/src/lib/Box.svelte';
</script>
<h3>NumericTextbox</h3>
<Box class="l-my2">
    <NumericTextbox min={1} value={5} max={10} />
</Box>
