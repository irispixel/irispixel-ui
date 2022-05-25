<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script lang="ts">
  import Canvas from '@irispixel/svelte.canvas';
  import Portal from '@irispixel/svelte.portal';
  import { Point, drawRect } from '@irispixel/common.charts';
  import { PieChart, Arc } from './piechart-draw';

  export let width = 800;

  let centerX = (width / 2);
  let centerY = (width / 2);
  let center = new Point(centerX, centerY);
  let radius = width * 0.45;
  let piechart = new PieChart<string>(center, radius);

  let ctx: CanvasRenderingContext2D  = null;

  let hoverAbsoluteX = -1;
  let hoverAbsoluteY = -1;
  let hoverOffsetX = -1;
  let hoverOffsetY = -1;

  let clickOffsetX = -1;
  let clickOffsetY = -1;

  let styles = '';

  let intersectedArc: Arc<string>  = null;
  let lastClickedArc: Arc<string>  = null;
  
  let boundrect: DOMRectReadOnly;

  let clickDebugMessage =   `clicked ${clickOffsetX}, ${clickOffsetY}`;
  let hoverDebugMessage = 'Hover Message';

  function getIntersectedArc(mouseOffsetX: number, mouseOffsetY: number) {
    hoverDebugMessage = `About to compute getIntersectedArc`;
    return piechart.checkIntersection(mouseOffsetX, mouseOffsetY);
  }

  function repaint() {
    piechart.addUnit(new Arc(0, Math.PI / 4, "Google"));
    piechart.addUnit(new Arc(Math.PI / 4,  Math.PI * 5/6 , "Bing"));
    if (ctx === null) {
      return;
    }
    piechart.render(ctx);
    drawRect(ctx, width, width);
  }

  function onDraw(e: CustomEvent) {
    ctx = e.detail.ctx;
    repaint();
  }

  function onBoundRect(e: CustomEvent) {
    boundrect = e.detail.boundrect;
  }

  function onClick(e: MouseEvent) {
    if (lastClickedArc !== null) {
      lastClickedArc.render(ctx, piechart.center, piechart.radius, '#00ffff');
    }
    clickOffsetX = e.clientX - boundrect?.left;
    clickOffsetY = e.clientY - boundrect?.top;
    clickDebugMessage =   `clicked ${clickOffsetX}, ${clickOffsetY}`;
    let clickedArc = getIntersectedArc(clickOffsetX, clickOffsetY);
    if (clickedArc !== null) {
      clickedArc.render(ctx, piechart.center, piechart.radius, '#0000ff');
      lastClickedArc = clickedArc;
    } else {
      lastClickedArc.render(ctx, piechart.center, piechart.radius, '#00ffff');
      lastClickedArc = null;
    }
  }

  function onMouseMove(e: MouseEvent) {
    hoverAbsoluteX = e.clientX;
    hoverAbsoluteY = e.clientY;

    styles = `top : ${hoverAbsoluteY + 2}px; left: ${hoverAbsoluteX + 2}px;`;

    hoverOffsetX = e.clientX - boundrect?.left;
    hoverOffsetY = e.clientY - boundrect?.top;

    intersectedArc = getIntersectedArc(hoverOffsetX, hoverOffsetY);
  }
</script>
<style lang="scss">
.pie-root {
  vertical-align: middle;
}
.hover-label {
  background: lightcoral;
  color: black;
  padding: 5px 5px 5px 5px;
}
</style>
<div class="pie-root">
  <Canvas w={width} h={width}
    on:newcontext={onDraw}
    on:boundrect={onBoundRect}
    on:click={onClick}
    on:mousemove={onMouseMove}></Canvas>
  <Portal isOpen={intersectedArc !== null}  styles={styles}>
    <div class="hover-label">
      {#if intersectedArc !== null}
        Intersected { intersectedArc.startAngle } :: { intersectedArc.endAngle } :: {intersectedArc.data}
      {:else}
        No intersection
      {/if}	
    </div>
  </Portal>
  <div>
    { hoverDebugMessage }
  </div>
  <div>
    { clickDebugMessage }
    {#if lastClickedArc !== null}
      Clicked { lastClickedArc.startAngle } :: { lastClickedArc.endAngle } :: {lastClickedArc.data}
    {:else}
        Nothing clicked
    {/if}	
  </div>
</div>