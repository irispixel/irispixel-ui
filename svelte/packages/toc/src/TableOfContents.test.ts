// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import TableOfContents from './TableOfContents.svelte'

test('renders table of contents', () => {
  const headers: Array<string> = [

  ];
  const {getByText} = render(TableOfContents, {headers: headers})
  // const darkTheme = getByText('World')

  // expect(darkTheme).toBeInTheDocument()
})
