// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { GanttChart } from './../src/lib/ganttchart-draw';
import { Point } from '@irispixel/common.charts';

test('testing GanttChart implementation', () => {
  const center = new Point(4, 5);
  const ganttchart = new GanttChart(center, 5);
  expect(ganttchart.center.x).toBe(4);
});
