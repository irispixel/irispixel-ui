<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts" context="module">
  export type Food = {
    name: string;
    selected: boolean;
  };
</script>

<script lang="ts">
  import Checkbox from '@svelte.core/checkbox/src/lib/Checkbox.svelte';
  import Flex, { FlexDirection } from '@svelte.core/flex/src/lib/Flex.svelte';
  export let foods: Array<Food> = [];
  export let food_name = '';
  export let color = 'primary';
  export let size = 'sm';
  export let disabled = false;

  function onFood(e: Event) {}
</script>

<Flex inline direction={FlexDirection.Column}>
  <div>
    {#each foods as food, i}
      <Checkbox
        {color}
        {size}
        bind:checked={food.selected}
        name={food_name}
        value={food.name}
        {disabled}
        on:change={onFood}
      >
        <span slot="text">{food.name}</span>
      </Checkbox>
    {/each}
    <Checkbox {color} {size} name={food_name} indeterminate={true} {disabled}>
      <span slot="text">Indeterminate</span>
    </Checkbox>
  </div>
  <div>
    {#each foods as food, i}
      <span class="item">
        {food.name}: {food.selected}
      </span>
    {/each}
  </div>
</Flex>

<style lang="scss">
  .item {
    padding-right: 10px;
  }
</style>
