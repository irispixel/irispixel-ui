/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect } from '@irispixel/common-popover';
import { getDropdownStyles, DropdownPosition } from '../src/dropdown-positions';

test('testing doGetDropdownStyles', () => {
  let elementRect = new ElementRect(0, 0, 10, 10);
  for (let position of Object.values(DropdownPosition)) {
    getDropdownStyles(position)(elementRect);
  }
});
