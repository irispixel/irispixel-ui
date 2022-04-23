// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import PortalByAction from './PortalByAction.svelte'

test('renders a portal - isOpen = false', () => {
  const {getByText} = render(PortalByAction)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})

test('renders a portal - isOpen = true', () => {
  const {getByText} = render(PortalByAction, {
    props: {
      isOpen: true
    }
  })
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})
