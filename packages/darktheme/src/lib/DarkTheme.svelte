<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<Toggle bind:checked={darkmode} bind:darkmode={darkmode} on:change={onChange}>
  <CircleToggle slot="icon" checked={darkmode}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" slot="on">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>        
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" slot="off">
      <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
      />
    </svg>  
  </CircleToggle>
</Toggle>
<script lang="ts">
  /* eslint-env browser */
  import { Toggle, CircleToggle } from '@irispixel/svelte.toggle';
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  const Dark = "dark";
  const Light = "light";

  function get_theme() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
  }

  function set_theme(t: string) {
    localStorage.setItem('theme', t);
  }

  function auto_retrieve_theme() {
    const existing_theme = get_theme();
    if (existing_theme !== undefined || existing_theme !== null) {
      return existing_theme;
    }
    if (window === undefined || typeof window === undefined) {
      return Light;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Dark;
    }
    return Light;
  }
  const dispatch = createEventDispatcher();

  export let darkmode = false;

  function onChangeTheme() {
    set_theme(darkmode ? Dark: Light);
    dispatch('change', darkmode);
  }

  function onChange(e: Event) {
    onChangeTheme();
  }

  onMount(() => {
    const theme = auto_retrieve_theme();
    darkmode = (theme === Dark);
    onChangeTheme();
  });

</script>


