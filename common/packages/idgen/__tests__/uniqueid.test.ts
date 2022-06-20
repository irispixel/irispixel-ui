// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import uniqueid from '../src/uniqueid';

test('testing uniqueid', () => {
  const id1 = uniqueid('prefix');
  expect(id1).not.toBeNull();
  expect(id1.length).toBeGreaterThan(0);
  const id2 = uniqueid('prefix');
  expect(id1).not.toEqual(id2);
});
