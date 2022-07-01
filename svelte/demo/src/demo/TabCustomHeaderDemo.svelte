<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Tabs from '@svelte.components/tabs/src/lib/Tabs.svelte';
  import Tab from '@svelte.components/tabs/src/lib/Tab.svelte';
  import MyTabHeader from './MyTabHeader.svelte';

  let selectedFood = 'cookies';
  let items = ['cake', 'cookies', 'pastry'];
</script>

<Tabs bind:value={selectedFood} {items}>
  <span slot="header" let:item let:selected let:color>
    <MyTabHeader {item} {selected} {color} />
  </span>
  <Tab value="cake">Cake</Tab>
  <Tab value="cookies">Cookies</Tab>
  <Tab value="pastry">Pastry</Tab>
</Tabs>
