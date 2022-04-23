<script lang="ts">
	import Box from '../../packages/box/src/Box.svelte';
	import Badge from '../../packages/badge/src/Badge.svelte';
</script>
<h3>Badges</h3>
<Box class="l-my2">
    <Badge content="9" hAlign="right">
    Baseline right
    </Badge>
</Box> 


<Box class="l-my2">
    <Badge content="1" hAlign="left" vAlign="top" >
    Top Left
    </Badge>
</Box>
    
<Box class="l-my2">
    <Badge content="2" hAlign="right" vAlign="top" >
    Top Right
    </Badge>
</Box>
    
<Box class="l-my2">
    <Badge content="3" hAlign="left" vAlign="bottom">
      Bottom Left
    </Badge>
</Box>
    
<Box class="l-my2">
    <Badge content="4" hAlign="right" vAlign="bottom" >
    Bottom Right
    </Badge>
</Box>