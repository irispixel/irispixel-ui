<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import Checkbox from '@svelte.core/checkbox/src/lib/Checkbox.svelte';
import { darkThemeStore, triggerThemeStore } from '@svelte.core/theme/src/lib';

$: darkmode = $darkThemeStore;

function onSelect(e: Event) {
    darkThemeStore.set(darkmode);
    triggerThemeStore.set(true);
}

</script>
<Checkbox bind:checked={darkmode} name={'dark'} value={'dark'} on:change={onSelect}>
    <span slot="icon">
        D
    </span>
    <span slot="text" >
        Value:{darkmode} - Store:{$darkThemeStore}
    </span>
</Checkbox>