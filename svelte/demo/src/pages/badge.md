---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Badge Demo'
setup: |
  import Badge from '@svelte.core/badge/src/lib/Badge.svelte';
---

<h3>Badge Demos</h3>
<Badge content="9" hAlign="right">Baseline right</Badge>

<Badge content="1" hAlign="left" vAlign="top">Top Left</Badge>

<Badge content="2" hAlign="right" vAlign="top">Top Right</Badge>

<Badge content="3" hAlign="left" vAlign="bottom">Bottom Left</Badge>

<Badge content="4" hAlign="right" vAlign="bottom">Bottom Right</Badge>
