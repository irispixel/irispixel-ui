<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->



<script lang="ts">
import Input from '@svelte.core/input/src/lib/Input.svelte';
import { ActivityIcon, AirplayIcon, LogInIcon, LogOutIcon, MenuIcon } from 'svelte-feathers';

const colors = ['primary', 'secondary'];
const sizes = ['sm', 'md', 'lg', 'xl'];
const variants = ['flat'];
let value = 'universe';
</script>
<h1>Svelte Input</h1>
<Input bind:value={value}/>
<span>h:{value}</span>

{#each variants as variant, i}
    <div>
    <h2>{variant} inputs</h2>
    {#each colors as color, j}
        <div>
            <h3>{color}</h3>
        {#each sizes as size, k}
            <Input variant={variant} color={color} size={size} icon={MenuIcon}>Menu</Input>
        {/each}    
            <h3>disabled </h3>
        {#each sizes as size, k}
            <Input variant={variant} disabled={true} color={color} size={size} icon={MenuIcon}>Menu</Input>
        {/each}    
        </div>
    {/each}    
    </div>
{/each}

