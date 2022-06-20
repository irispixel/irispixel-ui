<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->



<script lang="ts">
import Link from '@svelte.core/link/src/lib/Link.svelte';
import ButtonGroup from '@svelte.core/button/src/lib/ButtonGroup.svelte';
import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';

const colors = ['primary', 'secondary'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const variants = ['flat', 'text', 'ghost', 'raised'];
</script>
<h1>Svelte Links</h1>

{#each variants as variant, i}
    <div>
    <h2>{variant}</h2>
    {#each colors as color, j}
        <div>
            <h3>{color}</h3>
        {#each sizes as size, k}
            <Link variant={variant} color={color} size={size} icon={MenuIcon}>Menu</Link>
        {/each}    
        </div>
    {/each}    
    </div>
{/each}

<h4>Button Group</h4>
<ButtonGroup>
    <Link color="primary" size="md">New</Link>
    <Link color="secondary" size="md">Login</Link>
</ButtonGroup>
