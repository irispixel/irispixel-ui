// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import PortalByAction from '$lib/PortalByAction.svelte';

test('renders a portal - isOpen = false', () => {
  const { getByText } = render(PortalByAction);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});

test('renders a portal - isOpen = true', () => {
  const { getByText } = render(PortalByAction, {
    props: {
      isOpen: true
    }
  });
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
