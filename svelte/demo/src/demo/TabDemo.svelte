<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import Tabs from '@svelte.components/tabs/src/lib/Tabs.svelte';
  import Tab from '@svelte.components/tabs/src/lib/Tab.svelte';

  let selectedValue = 'badge';
  let items = ['button', 'badge', 'radio', 'checkbox'];
</script>

<Tabs bind:value={selectedValue} {items}>
  <Tab value="button">Button</Tab>
  <Tab value="badge">Badge</Tab>
  <Tab value="radio">Radio</Tab>
  <Tab value="checkbox">Checkbox</Tab>
</Tabs>
