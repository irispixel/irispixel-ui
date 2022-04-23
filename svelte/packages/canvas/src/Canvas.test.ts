// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent} from '@testing-library/svelte'

import Canvas from './Canvas.svelte'

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('renders a Canvas', () => {
  const {getByText} = render(Canvas)
  // const button = getByText('World')

  // expect(button).toBeInTheDocument()
})

