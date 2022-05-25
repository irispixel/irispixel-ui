<!--
 Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
    import { getContext, onDestroy } from 'svelte';
    import { get } from 'svelte/store';
    import type { Writable } from 'svelte/store';
    import { keyChecked, keyColor, keyDarkmode, keyDisabled, keySize } from './checkboxstore';

    let checkedStore = getContext<Writable<boolean>>(keyChecked);
    let disabled = getContext<boolean>(keyDisabled);
    let color = getContext<string>(keyColor);
    let sz = getContext<string>(keySize);
    let darkmode = getContext<boolean>(keyDarkmode);

    let checked = get(checkedStore);

    const unsubscribe = checkedStore.subscribe( (value: boolean) => {
        checked = value;
    });
    onDestroy( () => {
        unsubscribe();
    });
</script>    
<style lang="scss">
</style>
