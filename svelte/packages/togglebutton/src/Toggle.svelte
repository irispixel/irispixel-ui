<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
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
import { RawCheckbox } from './../../checkbox';
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
