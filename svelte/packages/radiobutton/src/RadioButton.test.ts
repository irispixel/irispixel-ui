// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import RadioButton from './RadioButton.svelte'

test('renders a radiobutton', () => {
  const {getByText} = render(RadioButton)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})
