// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import PortalByAction from '../src/lib/PortalByAction.svelte';

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
