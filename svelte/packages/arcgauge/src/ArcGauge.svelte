<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  import Canvas from './../../canvas';

  export let width = 400;

  let centerX: number|null = null;
  let centerY: number|null = null;

  let boundrect;
  let ctx: CanvasRenderingContext2D;

  function doDrawArc(ctx: CanvasRenderingContext2D, 
    inCenterX: number, inCenterY: number, 
    radius: number, startAngle: number, endAngle: number){
    ctx.beginPath();
    ctx.arc(inCenterX, inCenterY, radius, startAngle, endAngle);
    ctx.stroke();
  }  

  function onBoundRect(e: CustomEvent) {
    boundrect = e.detail.boundrect;
    centerX = (width / 2);
    centerY = (width / 2);
    repaint();
  }

  function repaint() {
    if (centerX === null || centerY === null) {
      return;
    }
    let chartWidth = width * 0.9;
    doDrawArc(ctx, centerX, centerY, chartWidth/2, 0, 2 * Math.PI);
    doDrawArc(ctx, centerX, centerY, 10, 0, 2 * Math.PI);
    // doDrawRect(ctx);
  }

  function onDraw(e: CustomEvent) {
    ctx = e.detail.ctx;
    repaint();
  }

</script>
<style lang="scss">
</style>
<Canvas w={width} h={width}
  on:newcontext={onDraw}
  on:boundrect={onBoundRect}
  on:click
  on:mousemove
  on:mousedown
  on:mouseup></Canvas>
