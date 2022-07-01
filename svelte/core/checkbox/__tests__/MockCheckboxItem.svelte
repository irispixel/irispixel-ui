<!--
 Copyright (c) 2022 IrisPixel
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
  import { writable } from 'svelte/store';
  import ContextTest, { type KeyValue } from '@irispixel/svelte-context-test/ContextTest.svelte';
  import CheckboxItem from '$lib/CheckboxItem.svelte';
  import { keyGroup, keyName, keyGroupDisabled, keyOutGroup } from '$lib/RawCheckboxGroup.svelte';
  const keyValues: Array<KeyValue> = [
    { key: keyGroup, value: writable([]) } as KeyValue,
    { key: keyOutGroup, value: writable([]) } as KeyValue,
    { key: keyName, value: writable('') } as KeyValue,
    { key: keyGroupDisabled, value: writable(false) } as KeyValue
  ];
</script>

<ContextTest component={CheckboxItem} {keyValues} />
