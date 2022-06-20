<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<script lang="ts">
import { onMount } from 'svelte';
import { infer_theme, Dark, Light, setDefaultBody, set_theme_preload } from './infer-theme';
import { darkThemeStore, triggerThemeStore } from './themestore';

setDefaultBody();

$: triggered = $triggerThemeStore;
$: set_theme_preload(triggered, $darkThemeStore);

onMount(() => {
    let current_theme = infer_theme();
    darkThemeStore.set(current_theme === Dark);
});
</script>
<svelte:head>
    <script lang="js">
    function ip_load_theme() {
        let darkmode = false;
        if (window) {
            window.document.body.classList.add('ip-hide');
        }
        const theme =   (typeof localStorage !== 'undefined' && localStorage.getItem('theme'));
        if (theme === undefined || theme  === null) {
            if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                console.log(`Theme is undefined but darkmode is true`);
                darkmode = true;
            }
        } else {
            darkmode = (theme === 'dark');
        }
        if (darkmode && window) {
            window.document.body.classList.add('dark');
        }
        if (window) {
            window.document.body.classList.remove('ip-hide');
        }
    }
    ip_load_theme();
    </script>
</svelte:head>
<slot />
<style lang="scss">
    @import '../../../../../css/src/theme.scss';
</style>