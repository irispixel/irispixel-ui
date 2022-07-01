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
  import RadioButton from '@svelte.core/radiobutton/src/lib/RadioButton.svelte';
  import RadioGroup from '@svelte.core/radiobutton/src/lib/RadioGroup.svelte';
  import Input from '@svelte.core/input/src/lib/Input.svelte';
  import Flex, { FlexDirection } from '@svelte.core/flex/src/lib/Flex.svelte';

  export let foods: Array<Food> = [];
  export let food_name = '';
  export let food_group = '';
  export let color = 'primary';
  export let size = 'sm';
  export let disabled = false;

  function onFood(e: Event) {}
</script>

<Flex inline direction={FlexDirection.Column}>
  <div>
    <RadioGroup bind:group={food_group} name={food_name} {color} {size}>
      {#each foods as food, i}
        <RadioButton value={food.name} {disabled} on:change={onFood}>
          <span slot="text">{food.name}</span>
        </RadioButton>
      {/each}
    </RadioGroup>
  </div>
  <Input bind:value={food_group} />
  Food Group: {food_group}
</Flex>
