// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { GanttChart } from './ganttchart-draw';
import { Point } from './../../../../common/charts';

test('testing GanttChart implementation', () => {
  const center = new Point(4, 5);
  const ganttchart = new GanttChart(center, 5);
  expect(ganttchart.center.x).toBe(4);

})
