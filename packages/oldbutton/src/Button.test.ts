// (C) Copyright  IrisPixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import Button from './Button.svelte'

test('renders primary color button', () => {
  const {getByText} = render(Button)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', () => {
  const {getByText} = render(Button)
  // const button = getByText('World')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.

  // await fireEvent.click(button)

  // expect(button).toHaveTextContent('World')
})