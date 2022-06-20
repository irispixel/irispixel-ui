/**
 * @jest-environment jsdom
 */
// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getAlignment, HAlign, VAlign, PositionType } from '../src/popover-positions';

test('testing getAlignment', () => {
  let rec = new DOMRect(0, 0, 800, 600);
  let positionType: PositionType = {
    hAlign: HAlign.Left,
    vAlign: VAlign.Top,
    targetBoundingRect: rec
  };
  const cssClass = getAlignment(positionType);
});
