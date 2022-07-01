/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect } from '../src/rect';
import { getPopoverStyles, PopoverPosition } from '../src/popover-positions';

test('testing getPopoverStyles - popover', () => {
  let elementRect = new ElementRect(0, 0, 10, 10);
  for (let position of Object.values(PopoverPosition)) {
    getPopoverStyles(position)(elementRect);
  }
});
