// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { PieChart } from './piechart-draw';
import { Point } from './../../../../common/charts';

test('testing PieChart implementation', () => {
  const center = new Point(4, 5);
  const piechart = new PieChart(center, 5);
  expect(piechart.center.x).toBe(4);

})
