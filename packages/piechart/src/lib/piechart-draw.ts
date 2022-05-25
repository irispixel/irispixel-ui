// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

import type { Point } from '@irispixel/common.charts';

class Arc<T> {
  startAngle: number;
  endAngle: number;
  data: T;

  constructor(startAngle: number, endAngle: number, data: T) {
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.data = data;
  }

  render(ctx: CanvasRenderingContext2D, center: Point, radius: number, color: string) {
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, radius, this.startAngle, this.endAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
}

class PieChart<T> {
  center: Point;
  radius: number;
  arcs: Array<Arc<T>> = [];

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  render(ctx: CanvasRenderingContext2D): void {
    for (const arc of this.arcs) {
      arc.render(ctx, this.center, this.radius, '#00ffff');
    }
  }

  addUnit(val: Arc<T>): void {
    this.arcs.push(val);
  }

  checkIntersection(x: number, y: number): Arc<T> | null {
    const inside = this.center.distanceBetween(x, y) <= this.radius;
    if (!inside) {
      return null;
    }
    const angle = this.center.computeAngle(x, y);
    // TODO: This is linear - O(n) and not so great.
    // Ideally - the arcs should be sorted and O(log n)
    for (const arc of this.arcs) {
      if (arc.startAngle <= angle && arc.endAngle > angle) {
        // TODO: Biased towards start when doing comparison
        return arc;
      }
    }
    // This should not happen ideally. Somewhere the angle should fit in.
    return null;
  }
}

export { Arc, PieChart };
