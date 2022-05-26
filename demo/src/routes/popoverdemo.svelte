<script lang="ts">
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import Button from '../../../packages/button/src/lib/Button.svelte';
	import Layout from '$lib/layout.svelte';
	import { VAlign, HAlign, TriggerEvent, CloseOnLeave } from '../../../packages/popover';
	import { onMount } from 'svelte';
	import Popover from '../../../packages/popover/src/lib/Popover.svelte';

	onMount( async() => {
	});
</script>

<Layout>
	<h3>Popover</h3>

	<h4>HAlign Left</h4>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Top}>
			<Button slot="target" class="l-px2 l-py1">New Button</Button>
			<span slot="popover" class="blue-border">Nice Tooltip</span>
		</Popover>
	</Box>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Bottom}>
			<Button slot="target" class="l-px2 l-py1">Button with Popover Bottom</Button>
			<span slot="popover" class="green-border">Tooltip at Bottom</span>
		</Popover>
	</Box>

	<h4>HAlign Right</h4>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Top} hAlign={HAlign.Right}>
			<Button slot="target" class="l-px2 l-py1">Button with Popover - Top Right</Button>
			<span slot="popover" class="red-border">Tooltip at Top - Right Alignment</span>
		</Popover>
	</Box>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Bottom} hAlign={HAlign.Right}>
			<Button slot="target" class="l-px2 l-py1">Button with Popover - Bottom Right</Button>
			<span slot="popover" class="blue-border">Tooltip at Bottom - Right Alignment</span>
		</Popover>
	</Box>

	<h4>HAlign Middle</h4>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Top} hAlign={HAlign.Middle}>
			<Button class="l-px2 l-py1" slot="target">Button with Popover - Top Middle</Button>
			<span class="red-border" slot="popover">Tooltip at Top</span>
		</Popover>
	</Box>

	<Box class="l-my2">
		<Popover vAlign={VAlign.Bottom} hAlign={HAlign.Middle}>
			<Button class="l-px2 l-py1" slot="target">Button with Popover - Bottom Middle</Button>
			<span class="blue-border" slot="popover">Tooltip at Bottom</span>
		</Popover>
	</Box>
</Layout>

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
