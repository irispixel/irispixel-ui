<script lang="ts">
    import DarkTheme from '../../packages/darktheme/src/DarkTheme.svelte';

    let darkmode = false;

    let text = '';
    function onChange(e: CustomEvent) {
        text = darkmode ? 'Dark' : 'Light';
    }
</script>

<h3>Dark Theme Second</h3>
<DarkTheme bind:darkmode={darkmode} on:change={onChange} />
{darkmode} {text}