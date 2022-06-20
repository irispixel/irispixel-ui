<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import Button from '@svelte.core/button/src/lib/Button.svelte';
import ButtonGroup from '@svelte.core/button/src/lib/ButtonGroup.svelte';
import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';

const colors = ['primary', 'secondary'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const variants = ['flat', 'text', 'ghost', 'raised'];
</script>
<h1>Svelte Buttons</h1>

{#each variants as variant, i}
    <div>
    <h2>{variant} button</h2>
    {#each colors as color, j}
        <div>
            <h3>{color}</h3>
        {#each sizes as size, k}
            <Button variant={variant} color={color} size={size} icon={MenuIcon}>Menu</Button>
        {/each}    
            <h3>disabled </h3>
        {#each sizes as size, k}
            <Button variant={variant} disabled={true} color={color} size={size} icon={MenuIcon}>Menu</Button>
        {/each}    
        </div>
    {/each}    
    </div>
{/each}

<h4>Button Group</h4>
<ButtonGroup>
    <Button color="primary" size="md">New</Button>
    <Button color="secondary" size="md">Login</Button>
</ButtonGroup>
