<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->



<script lang="ts">
	import Box from '@svelte.core/box/src/lib/Box.svelte';
	import Button from '@svelte.core/button/src/lib/Button.svelte';
	import { VAlign, HAlign, TriggerEvent } from '@irispixel/common-popover';
	import Popover from '@svelte.popovers/popover/src/lib/Popover.svelte';

    const hAligns = [HAlign.Left, HAlign.Middle, HAlign.Right];
    const vAligns = [VAlign.Top, VAlign.Middle, VAlign.Bottom];
</script>

<h3>Popover</h3>

<h4> Combos</h4>
{#each hAligns as hAlign, i}
{#each vAligns as vAlign, j}

<div class="container">
	<div class="left">
		<h4>valign: {vAlign},   hAlign: {hAlign}</h4>
	</div>
	<Popover vAlign={vAlign} hAlign={hAlign}>
		<Button slot="target" class="l-px2 l-py1">Button with vAlign:{vAlign}  - hAlign:{hAlign}</Button>
		<span slot="popover" class="red-border">Tooltip content</span>
	</Popover>
</div>
{/each}    
{/each}    



<h4>Trigger Event Click</h4>

<Box class="l-my2">
    <Popover vAlign={VAlign.Bottom} hAlign={HAlign.Middle} triggerEvent={TriggerEvent.Click}>
        <Button class="l-px2 l-py1" slot="target">Button with Popover - Bottom Middle</Button>
        <span class="blue-border" slot="popover">Tooltip at Bottom</span>
    </Popover>
</Box>


<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 2px;
	}

	.left {
		padding: 20px;
	}
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
