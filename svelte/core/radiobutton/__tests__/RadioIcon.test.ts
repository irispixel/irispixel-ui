// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import RadioIcon from '$lib/RadioIcon.svelte';

test('renders a RadioIcon', () => {
  const { getByText } = render(RadioIcon);
  // const button = getByText('World')
  // expect(button).toBeInTheDocument()
});
