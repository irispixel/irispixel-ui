// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.


import {sqrt, atan2} from './math-lib';

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
        return atan2(y - this.y , x  - this.x);
    }
}

export default Point;