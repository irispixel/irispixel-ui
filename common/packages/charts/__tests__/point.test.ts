// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Point from '../src/point';

test('testing points', () => {
  const point = new Point(4, 5);
  expect(point.x).toBe(4);
});
