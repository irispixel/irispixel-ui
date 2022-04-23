// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import Modal from './Modal.svelte'

test('renders a Modal closed', () => {
  const {getByText} = render(Modal)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})

test('renders a Modal open', () => {
  const portals = document.createElement('portals')
  document.body.appendChild(portals);
  const {getByText} = render(Modal, {
      props: {
        isOpen: false
      }
  })
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})
