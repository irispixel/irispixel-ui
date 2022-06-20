// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { validate_color, validate_sz } from '../src/lib/validate';

test('testing validate_color', () => {
  expect(validate_color('primary')).toBe(true);
  expect(validate_color('tertiary')).toBe(false);
});
