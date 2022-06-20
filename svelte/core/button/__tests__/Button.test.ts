// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Button from '$lib/Button.svelte';

test('renders default button', () => {
  const { getByText } = render(Button);
});

test('renders flat variant button', () => {
  const { getByText } = render(Button, { props: { variant: 'flat' } });
});

test('renders ghost variant button', () => {
  const { getByText } = render(Button, { props: { variant: 'ghost' } });
});

test('renders text variant button', () => {
  const { getByText } = render(Button, { props: { variant: 'text' } });
});

test('renders raised variant button', () => {
  const { getByText } = render(Button, { props: { variant: 'raised' } });
});

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', () => {
  const { getByText } = render(Button);
  // const button = getByText('World')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.

  // await fireEvent.click(button)

  // expect(button).toHaveTextContent('World')
});
