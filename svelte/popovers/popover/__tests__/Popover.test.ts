// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import Popover from '$lib/Popover.svelte';
import { HAlign, VAlign, CloseOnLeave } from '@irispixel/common-popover';

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

test('renders a popover element', () => {
  const { getByText } = render(Popover);
});

test('renders a popover element with custom props', () => {
  const { getByText } = render(Popover, { props: { hAlign: HAlign.Left } });
});
