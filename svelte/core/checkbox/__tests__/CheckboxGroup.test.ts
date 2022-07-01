// (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import CheckboxGroup from '$lib/CheckboxGroup.svelte';

test('renders a CheckboxGroup', () => {
  const { getByText } = render(CheckboxGroup);
});
