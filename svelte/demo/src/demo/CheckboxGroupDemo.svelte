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
  import CheckboxItem from '@svelte.core/checkbox/src/lib/CheckboxItem.svelte';
  import CheckboxGroup from '@svelte.core/checkbox/src/lib/CheckboxGroup.svelte';

  let foods: Array<Food> = [
    {
      name: 'cake'
    },
    {
      name: 'cookies'
    },
    {
      name: 'pastries'
    }
  ];
  let food_name = 'foods';
  export let color = 'primary';
  export let disabled = false;
  let group: Array<string> = ['cake', 'cookies'];

  function onFood(e: Event) {}
</script>

{foods}
<CheckboxGroup bind:group name={food_name} {color}>
  {#each foods as food, i}
    <CheckboxItem value={food.name} {disabled} on:change={onFood}>
      <span>{food.name}</span>
    </CheckboxItem>
  {/each}
</CheckboxGroup>
{#each foods as food, i}
  <div class="l-px2">
    {food.name}:
  </div>
{/each}
Groups: {group}
