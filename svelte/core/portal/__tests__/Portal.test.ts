// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Portal from '$lib/Portal.svelte';

test('renders a Portal', () => {
  const { getByText } = render(Portal);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
