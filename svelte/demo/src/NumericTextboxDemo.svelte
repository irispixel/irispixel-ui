<script lang="ts">
	import Box from '../../packages/box/src/Box.svelte';
	import NumericTextbox from '../../packages/numerictextbox/src/NumericTextbox.svelte';
</script>
<h3>NumericTextbox</h3>
<Box class="l-my2">
    <NumericTextbox min={1} value={5} max={10} />
</Box> 
