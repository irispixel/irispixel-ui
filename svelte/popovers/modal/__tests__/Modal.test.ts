// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Modal from '$lib/Modal.svelte';

test('renders a Modal closed', () => {
  const { getByText } = render(Modal);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});

test('renders a Modal open', () => {
  const portals = document.createElement('portals');
  document.body.appendChild(portals);
  const { getByText } = render(Modal, {
    props: {
      isOpen: false
    }
  });
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
