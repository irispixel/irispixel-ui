// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { PieChart } from './../src/lib/piechart-draw';
import { Point } from '@irispixel/common.charts';

test('testing PieChart implementation', () => {
  const center = new Point(4, 5);
  const piechart = new PieChart(center, 5);
  expect(piechart.center.x).toBe(4);
});
