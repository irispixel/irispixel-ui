// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { sqrt } from '../src/math-lib';

test('testing sqrt', () => {
  expect(sqrt(4)).toBeCloseTo(2);
});
