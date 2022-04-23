// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.


// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import DarkTheme from './DarkTheme.svelte'

test('renders dark theme component', () => {
  const {getByTitle} = render(DarkTheme)
})