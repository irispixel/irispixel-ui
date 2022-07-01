---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'NumericTextbox Demo'
setup: |
  import NumericTextbox from '@svelte.core/numerictextbox/src/lib/NumericTextbox.svelte';
---

# Numeric Text Box Demo

<NumericTextbox min={1} value={5} max={10} />
