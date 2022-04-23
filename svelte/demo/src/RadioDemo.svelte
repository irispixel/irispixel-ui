<script lang="ts">
	import RadioButton from  '../../packages/radiobutton/src/RadioButton.svelte'
	import Box from '../../packages/box/src/Box.svelte';

    let group_name = "food";
    let group_value = "cakes";

    let foods = [
        "cakes",
        "cookies",
        "chocolate"
    ];
    function onFood(e: Event) {
        console.log(`Group: ${group_value} `);
    }

</script>
<h3>Radio Button</h3>
<Box class="l-my2">
    {#each foods as food, i}
    <RadioButton bind:group={group_value} 
        value={food}
        name={group_name}
        on:change={onFood}>
        <span slot="text">{food}</span>
    </RadioButton>
    {/each}
</Box> 
Group {group_value}
