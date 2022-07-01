<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import RawRadioButton from '$lib/RawRadioButton.svelte';
  import { keyGroup } from '$lib/RawRadioGroup.svelte';
  import { writable } from 'svelte/store';
  import ContextTest, { type KeyValue } from '@irispixel/svelte-context-test/ContextTest.svelte';
  const keyValues: Array<KeyValue> = [{ key: keyGroup, value: writable([]) } as KeyValue];
</script>

<ContextTest component={RawRadioButton} {keyValues} />
