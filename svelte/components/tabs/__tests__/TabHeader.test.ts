// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import TabHeader from '$lib/TabHeader.svelte';

test('renders a TabHeader', () => {
  const { getByText } = render(TabHeader);
});
