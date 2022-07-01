/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect } from '@irispixel/common-popover';
import { getDropdownListStyles, DropdownListPosition } from '../src/dropdownlist-positions';

test('testing doGetDropdownListStyles', () => {
  let elementRect = new ElementRect(0, 0, 10, 10);
  for (let position of Object.values(DropdownListPosition)) {
    getDropdownListStyles(position)(elementRect);
  }
});
