<script lang="ts">
	import Checkbox from  '../../packages/checkbox/src/Checkbox.svelte'
	import Box from '../../packages/box/src/Box.svelte';

    let food_group_name = "food";
    let food_group: Array<string> = [];
    let foods = [
        {name: "cakes", selected: true},
        {name: "cookies", selected: false},
        {name: "chocolate", selected: false}
    ];    

    let fruit_group_name = "fruits";
    let fruit_group: Array<string> = [];
    let fruits = [
        {name: "mango", selected: true},
        {name: "orange", selected: false},
        {name: "apple", selected: false}
    ];     

    let second_food_name = "second_food_name";
    let second_food_group : Array<string> = [];
    let second_foods = [
        {name: "pizza", selected: true},
        {name: "pasta", selected: false},
        {name: "risotto", selected: false}
    ];    

    function onFood(e: Event) {
        
    }

</script>
<style lang="scss">
</style>
<h3>Checkbox</h3>
<h4>Custom Design</h4>
<Box class="custom">
    <Box class="l-my2">
        {#each second_foods as food, i}
        <Checkbox bind:checked={food.selected} 
            name={second_food_name}
            on:change={onFood}>
            <span slot="text">{food.name}</span>
        </Checkbox>
        {/each}
    </Box> 
    <Box class="l-my2">
        {#each second_foods as food, i}
            <div class="l-px2">
                {food.name}: {food.selected}
            </div>
        {/each}
        { second_food_group }
    </Box>
</Box>
<h4>Foods</h4>
<Box class="l-my2">
    {#each foods as food, i}
    <Checkbox bind:checked={food.selected} 
        name={food_group_name}
        group={food_group}
        on:change={onFood}>
        <span slot="text">{food.name}</span>
    </Checkbox>
    {/each}
</Box> 
<Box class="l-my2">
    {#each foods as food, i}
        <div class="l-px2">
            {food.name}: {food.selected}
        </div>
    {/each}
</Box>
<h4>Fruits</h4>
<Box class="l-my2">
    {#each fruits as food, i}
    <Checkbox bind:checked={food.selected} 
        name={fruit_group_name}
        group={fruit_group}
        on:change={onFood}>
        <span slot="text">{food.name}</span>
    </Checkbox>
    {/each}
</Box> 
<Box class="l-my2">
    {#each fruits as food, i}
        <div class="l-px2">
            {food.name}: {food.selected}
        </div>
    {/each}
</Box>
