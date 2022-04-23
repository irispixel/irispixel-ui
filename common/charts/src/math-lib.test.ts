// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';
import { sqrt } from './math-lib';

test('testing sqrt', () => {
  expect(sqrt(4)).toBeCloseTo(2);
})

