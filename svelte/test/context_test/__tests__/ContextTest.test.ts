// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import Box from './Box.svelte';
import ContextTest from '$lib/ContextTest.svelte';

test('renders a ContextTest', () => {
  const { getByText } = render(ContextTest, { props: { component: Box } });
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
