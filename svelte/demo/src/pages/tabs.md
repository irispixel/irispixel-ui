---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Tab Demo'
setup: |
  import TabDemo from '@svelte.demo/TabDemo.svelte';
  import TabCustomHeaderDemo from '@svelte.demo/TabCustomHeaderDemo.svelte';
---

# Tab Demo

## Simple Tabs

<TabDemo client:visible />

## Custom Headers

<TabCustomHeaderDemo client:visible />
