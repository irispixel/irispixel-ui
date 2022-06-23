/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  getAlignmentCSS,
  HAlign,
  VAlign,
  PositionType,
  ElementRect
} from '../src/popover-positions';

test('testing getAlignment', () => {
  let positionType: PositionType = {
    hAlign: HAlign.Left,
    vAlign: VAlign.Top,
    elementRect: new ElementRect(0, 0, 10, 10)
  };
  const cssClass = getAlignmentCSS(positionType);
});
