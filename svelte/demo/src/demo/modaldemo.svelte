<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
    import Box from '@svelte.core/box/src/lib/Box.svelte';
    import Button from '@svelte.core/button/src/lib/Button.svelte';
	import Modal from '@svelte.popovers/modal/src/lib/Modal.svelte';

	let isOpen = false;

	let isOpen2 = false;

	let isSecondModalOpen = false;

	function onClick(e) {
		isOpen = !isOpen;
		console.log(`About to show modal: isOpen - ${isOpen}`);
	}

	function onClickModal(e) {
		console.log(`Clicking modal content`);
	}

	function onClickSecondModal(e) {
		console.log(`Clicking second modal content`);
	}

	function onSecondClick(e) {
		isOpen2 = !isOpen2;
	}

	function onThirdClick(e) {
		isSecondModalOpen = !isSecondModalOpen;
	}
</script>

<h3>Modal</h3>
<Box class="l-my2">
    <Button class="l-px4 l-py2" on:click={(e) => onClick(e)}>Show Modal</Button>
    <Modal bind:isOpen name='Fluent Modal' >
        <div class="content" on:click={(e) => onClickModal(e)}>Some content</div>
    </Modal>
</Box>

<Box class="l-my2">
    <Button class="l-px4 l-py2" on:click={(e) => onSecondClick(e)}
        >Show Modal without Backdrop</Button
    >
    <Modal bind:isOpen={isOpen2} zIndex={2} name='First Modal'>
        <div class="content2" on:click={(e) => onClickModal(e)}>
            Some content
            <Button class="l-px4 l-py2" on:click={(e) => onThirdClick(e)}>Show Second Modal</Button>
        </div>
    </Modal>

    <Modal bind:isOpen={isSecondModalOpen} zIndex={3} w={700} h={300} name='Second Modal'>
        <div class="second-modal" on:click={(e) => onClickSecondModal(e)}>Second Modal Content</div>
    </Modal>
</Box>
<style lang="scss">
	.content {
		background-color: inherit;
		color: inherit;
		width: 100%;
		height: 100%;
	}
	.content2 {
		outline: 1px solid lightgray;
		background-color: inherit;
		color: inherit;
		width: 100%;
		height: 100%;
	}
	.second-modal {
		outline: 1px solid lightgray;
		background-color: inherit;
		color: inherit;
		width: 100%;
		height: 100%;
	}
</style>
