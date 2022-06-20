<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import Box from '@svelte.core/box/src/lib/Box.svelte';
import Button from '@svelte.core/button/src/lib/Button.svelte';
import { TriggerEvent } from '@irispixel/common-popover';
import Tooltip from '@svelte.components/tooltip/src/lib/Tooltip.svelte';
</script>
<h3>Tooltip Demos</h3>
<h4>HAlign Left</h4>

<Box class="l-my2">
    <Tooltip vAlign="top" message="Nice Tooltip" >
        <Button class="l-px2 l-py1">New Button</Button>
    </Tooltip>
</Box>

<Box class="l-my2">
    <Tooltip vAlign="bottom" message="Tooltip at Bottom" >
        <Button class="l-px2 l-py1">Button with Popover Bottom</Button>
    </Tooltip>
</Box>

<h4>HAlign Right</h4>

<Box class="l-my2">
    <Tooltip vAlign="top" hAlign="right" message="Tooltip at Top - Right Alignment" >
        <Button class="l-px2 l-py1">Button with Popover - Top Right</Button>
    </Tooltip>
</Box>

<Box class="l-my2">
    <Tooltip vAlign="bottom" hAlign="right" message="Tooltip at Bottom - Right Alignment" >
        <Button class="l-px2 l-py1">Button with Popover - Bottom Right</Button>
    </Tooltip>
</Box>

<h4>HAlign Middle</h4>

<Box class="l-my2">
    <Tooltip vAlign="top" hAlign="middle" message="Tooltip at Top" >
        <Button class="l-px2 l-py1">Button with Popover - Top Middle</Button>
    </Tooltip>
</Box>

<Box class="l-my2">
    <Tooltip
        vAlign="bottom"
        hAlign="middle"
        message="Tooltip at Bottom"
        triggerEvent={TriggerEvent.Click}
        
    >
        <Button class="l-px2 l-py1">Button with Popover - Bottom Middle</Button>
    </Tooltip>
</Box>

<style>
	.red-border {
		border: 1px solid red;
	}

	.blue-border {
		border: 2px solid blue;
	}

	.green-border {
		border: 2px solid green;
	}

	.purple-border {
		border: 2px solid purple;
	}
</style>
