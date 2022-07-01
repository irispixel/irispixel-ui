<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import DropdownListUnit from './DropdownListDemo.svelte';
  import { DropdownListPosition } from '@irispixel/common-dropdown';
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
  ];
</script>

<DropdownListUnit position={DropdownListPosition.Top} items={secondItems} let:item>
  {item.country} - {item.id}
</DropdownListUnit>
