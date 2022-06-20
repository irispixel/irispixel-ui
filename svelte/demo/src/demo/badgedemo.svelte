<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->



<script lang="ts">
    import Badge from '@svelte.core/badge/src/lib/Badge.svelte';
    import Box from '@svelte.core/box/src/lib/Box.svelte';
</script>
<h3>Badge Demo</h3>
<Box class="l-my2">
    <Badge content="9" hAlign="right">Baseline right</Badge>
</Box>

<Box class="l-my2">
    <Badge content="1" hAlign="left" vAlign="top">Top Left</Badge>
</Box>

<Box class="l-my2">
    <Badge content="2" hAlign="right" vAlign="top">Top Right</Badge>
</Box>

<Box class="l-my2">
    <Badge content="3" hAlign="left" vAlign="bottom">Bottom Left</Badge>
</Box>

<Box class="l-my2">
    <Badge content="4" hAlign="right" vAlign="bottom">Bottom Right</Badge>
</Box>
