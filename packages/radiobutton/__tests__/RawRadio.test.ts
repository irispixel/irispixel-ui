// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import RawRadio from './../src/lib/RawRadio.svelte';

test('renders a RawRadio', () => {
  const { getByText } = render(RawRadio);
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
});
