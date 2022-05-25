<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->


<RawCheckbox 
    bind:checked={checked} 
    bind:group={group} 
    disabled={disabled}
    name={name} 
    value={value}
    color={color}
    sz={sz}
    darkmode={darkmode}
    ariaLabel={ariaLabel} 
    on:change>
    <slot name="icon" > 
        <CircleToggle />
    </slot>
    <slot name="text" />
</RawCheckbox>
<script lang="ts">
import { RawCheckbox } from '@irispixel/svelte.checkbox';
import CircleToggle from './CircleToggle.svelte';

export let checked = false;
export let disabled = false;
export let name = '';
export let value = '';
export let darkmode = false;
export let group: Array<string> = [];
export let ariaLabel = "";
export let sz = 'sm';
export let color = 'primary';
</script>
