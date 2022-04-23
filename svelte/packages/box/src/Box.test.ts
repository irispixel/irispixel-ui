// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import Box from './Box.svelte'

test('renders a box', () => {
  const {getByText} = render(Box)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})

