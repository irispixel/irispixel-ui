<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import DropdownList from '@svelte.components/dropdown/src/lib/DropdownList.svelte';
import { CloseOnLeave, HAlign, VAlign, TriggerEvent } from '@irispixel/common-popover';
export let items = [];
export let hAlign = HAlign.Left;
export let vAlign = VAlign.Bottom;
let selected = '';
</script>
<div class="go">
<span>Selected: {selected}</span>
<div>
    <DropdownList items={items} hAlign={hAlign} vAlign={vAlign} let:item let:id bind:selected={selected} content='Some Menu Button'>
        <slot item={item} id={id} />
    </DropdownList>
</div>
</div>
<style lang="scss">
    .go {
        display: flex;
        flex-direction: column;
    }
</style>
