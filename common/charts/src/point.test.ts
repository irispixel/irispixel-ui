// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

import Point from './point';

test('testing points', () => {
  const point = new Point(4, 5);
  expect(point.x).toBe(4);
})
