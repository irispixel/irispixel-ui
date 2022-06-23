// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { resize } from '../src/resize-actions';

beforeEach(() => {
  // ResizeObserver isn't available in test environment
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  });
  window.ResizeObserver = mockResizeObserver;
});

test('testing resize', () => {
  const mockElement = document.createElement('div');
  resize(mockElement);
});
