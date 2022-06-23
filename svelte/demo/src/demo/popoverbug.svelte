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

<h3>Popover Bug</h3>

<div class="container">
	<div class="space" />

	<Popover vAlign={VAlign.Bottom} hAlign={HAlign.Right}>
		<Button class="l-px2 l-py1" slot="target">Button with Popover - Bottom Top</Button>
		<span class="blue-border" slot="popover">Tooltip at Bottom</span>
	</Popover>
</div>

<style>
	.container {
		min-height: 140vh;
	}

.space {
	min-height: 100vh;
}
</style>
