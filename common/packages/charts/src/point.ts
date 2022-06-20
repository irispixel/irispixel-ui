// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { sqrt, atan2 } from './math-lib';

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceBetween(x: number, y: number): number {
    const distx = this.x - x;
    const disty = this.y - y;
    return sqrt(distx * distx + disty * disty);
  }

  computeAngle(x: number, y: number): number {
    return atan2(y - this.y, x - this.x);
  }
}

export default Point;
