// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function drawRect(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.beginPath();
  ctx.rect(0, 0, w, h);
  ctx.stroke();
}

export { drawRect };
