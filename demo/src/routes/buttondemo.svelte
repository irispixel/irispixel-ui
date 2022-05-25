<script lang="ts">
	import Layout from '$lib/layout.svelte';
	import Box from '../../../packages/box/src/lib/Box.svelte';
	import Button from '../../../packages/button/src/lib/Button.svelte';
	import ButtonGroup from '../../../packages/button/src/lib/ButtonGroup.svelte';
	import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';
</script>

<Layout>
	<h3>Ghost buttons</h3>
	<Box class="l-my1">
		<Button variant="ghost" color="primary" size="md" icon={MenuIcon}>MENU</Button>
		<Button variant="ghost" color="secondary" size="md" icon={MenuIcon}>MENU</Button>
	</Box>

	<h3>ButtonGroup</h3>
	<Box class="l-my1">
		<ButtonGroup>
			<Button color="primary" size="md">New</Button>
			<Button color="secondary" size="md">Login</Button>
		</ButtonGroup>
	</Box>

	<h3>Buttons</h3>
	<Button variant="ghost" color="primary" size="md" icon={MenuIcon}>MENU</Button>
	<Button color="primary" size="md">New</Button>
	<Button color="secondary" size="md">Login</Button>
	<Button variant="default" color="primary" size="md">Sign Up</Button>
</Layout>

<Box class="l-my1">
	<Button color="primary" class="l-px5 l-py2">px-xxl py-lg</Button>
</Box>

<Box class="l-my1">
	<Button color="primary" outline class="l-px5 l-py2">px-xxl py-lg</Button>
</Box>
