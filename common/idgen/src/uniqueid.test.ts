// Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
import uniqueid from './uniqueid';

test('testing uniqueid', () => {
  const prefix = uniqueid('prefix');
  expect(prefix).not.toBeNull();
  expect(prefix.length).toBeGreaterThan(0);
})
