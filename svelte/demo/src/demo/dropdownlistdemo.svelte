<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import Box from '@svelte.core/box/src/lib/Box.svelte';
import DropdownList from '@svelte.components/dropdownlist/src/lib/DropdownList.svelte';
import { TriggerEvent } from '@irispixel/common-popover';
</script>
<h3>DropdownList</h3>

<h4>Hover Example</h4>
<Box class="l-my2">
    <DropdownList>
        <div class="find">
            <span>Paris</span>
            <span>Berlin</span>
            <span>Madrid</span>
        </div>
    </DropdownList>
</Box>

<h4>Click Example</h4>
<Box class="l-my2">
    <DropdownList triggerEvent={TriggerEvent.Click}>
        <div class="find">
            <span>Hello</span>
            <span>World</span>
            <span>Universe</span>
        </div>
    </DropdownList>
</Box>
<style>
	.find {
		display: flex;
		flex-direction: column;
		background-color: white;
		border: 1px solid blue;
		padding: 4px 20px;
		border-radius: 4px;
	}
</style>
