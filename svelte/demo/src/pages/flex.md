---
layout: ../layouts/SvelteMarkdownLayout.astro
title: 'Flex Demo'
setup: |
  import Flex from '@svelte.core/flex/src/lib/Flex.svelte';
  import Button from '@svelte.core/button/src/lib/Button.svelte';
---

# Flex Demo

## Display

### Flex

<Flex>
    <Button>Left</Button>
    <Button>Right</Button>
</Flex>

### Inline-Flex

<Flex inline={true}>
    <Button>Left</Button>
    <Button>Right</Button>
</Flex>
