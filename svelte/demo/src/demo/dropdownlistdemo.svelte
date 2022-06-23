<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->


<script lang="ts">
import Box from '@svelte.core/box/src/lib/Box.svelte';
import DropdownListUnit from './dropdownlistunit.svelte';
import { TriggerEvent } from '@irispixel/common-popover';
import { CloseOnLeave, HAlign, VAlign, TriggerEvent } from '@irispixel/common-popover';
let items = [
    'Paris',
    'Berlin',
    'Madrid'
];
let secondItems = [
    {
        id: 'Paris',
        country: 'France'
    },
    {
        id: 'Berlin',
        country: 'Germany'
    },
    {
        id: 'Madrid',
        country: 'Spain'
    }
]
</script>
<h3>DropdownList</h3>

<h4>Hover Example</h4>
<Box class="l-my2">
    <DropdownListUnit items={items} hAlign={HAlign.Right} vAlign={VAlign.Bottom} let:item>
        <span>{item}</span>
    </DropdownListUnit>
</Box>

<h4>Click Example</h4>
<Box class="l-my2">
    <DropdownListUnit items={secondItems} let:item>
        {item.country} - {item.id}
    </DropdownListUnit>
</Box>

