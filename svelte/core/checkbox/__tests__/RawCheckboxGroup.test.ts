// (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import RawCheckboxGroup from '$lib/RawCheckboxGroup.svelte';

test('renders a RawCheckboxGroup', () => {
  const { getByText } = render(RawCheckboxGroup);
});
