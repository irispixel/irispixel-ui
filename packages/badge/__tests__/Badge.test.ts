// (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Badge from './../src/lib/Badge.svelte';

test('renders a badge', () => {
  const { getByText } = render(Badge);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
