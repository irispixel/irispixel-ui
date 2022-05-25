<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->


<script lang="ts">
    import { getContext, onDestroy } from 'svelte';
    import type { Writable } from 'svelte/store';
    import { get } from 'svelte/store';
    import {keyColor, keySize, keyDisabled, keyDarkmode, keyGroup} from './radiostore';
  
    let darkmode = getContext<boolean>(keyDarkmode);
    let disabled = getContext<boolean>(keyDisabled);
    let sz = getContext<string>(keySize);
    let color = getContext<string>(keyColor);
    let groupWritable = getContext<Writable<string>>(keyGroup);  
  
    let group = get(groupWritable);
    const unsubscribe = groupWritable.subscribe(
      (value: string) => {
        group = value;
      }
    );
    onDestroy( ()=> {
      unsubscribe();
    });
</script>    
