// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import NumericTextbox from '$lib/NumericTextbox.svelte';

test('renders primary color NumericTextbox', () => {
  const { getByText } = render(NumericTextbox);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
