<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
	import Toggle from '@svelte.popovers/togglebutton/src/lib/Toggle.svelte';
	function onToggle() {
		console.log(`Selected: ${selected3} `);
	}
	let selected3 = false;
	const colors = ['primary', 'secondary'];
	const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
	const variants = ['ios', 'android', 'windows'];

	let checked = true;
</script>

<h1>Svelte Toggle</h1>

{#each variants as variant, i}
    <div>
    <h2>{variant} button</h2>
    {#each colors as color, j}
        <div>
            <h3>{color}</h3>
        {#each sizes as size, k}
            <Toggle variant={variant} checked={true} color={color} size={size} />
        {/each}    
            <h3>disabled </h3>
        {#each sizes as size, k}
            <Toggle variant={variant} disabled={true} checked={true} color={color} size={size} />
        {/each}    
        </div>
    {/each}    
    </div>
{/each}
