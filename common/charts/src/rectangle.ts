// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

function drawRect(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.stroke();
  }

export { drawRect };