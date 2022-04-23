<!--
  Copyright  (C)  2021-2022 IrisPixel. All Rights Reserved.
-->
<script lang="ts">
  import Canvas from './../../canvas';
  import Portal from './../../portal';
  import { GanttChart, Arc } from './ganttchart-draw';
  import { Point, drawRect } from './../../../../common/charts';

  export let width = 800;

  let centerX = (width / 2);
  let centerY = (width / 2);
  let center = new Point(centerX, centerY);
  let radius = width * 0.45;
  let ganttchart = new GanttChart<string>(center, radius);

  let styles = '';

  let ctx: CanvasRenderingContext2D = null;

  let hoverAbsoluteX = -1;
  let hoverAbsoluteY = -1;
  let hoverOffsetX = -1;
  let hoverOffsetY = -1;

  let clickOffsetX = -1;
  let clickOffsetY = -1;

  let hoverTop = hoverAbsoluteX;
  let hoverLeft = hoverAbsoluteY;

  let intersectedArc: Arc<string> = null;
  let lastClickedArc: Arc<string> = null;

  let clickDebugMessage =   `clicked ${clickOffsetX}, ${clickOffsetY}`;
  let hoverDebugMessage = 'Hover Message';

  function getIntersectedArc(mouseOffsetX: number, mouseOffsetY: number) {
    hoverDebugMessage = `About to compute getIntersectedArc`;
    return ganttchart.checkIntersection(mouseOffsetX, mouseOffsetY);
  }

  function repaint() {
    ganttchart.addUnit(new Arc(0, Math.PI / 4, "Google"));
    ganttchart.addUnit(new Arc(Math.PI / 4,  Math.PI * 5/6 , "Bing"));
    if (ctx === null) {
      return;
    }
    ganttchart.render(ctx);
    drawRect(ctx, width, width);
  }

  function onDraw(e) {
    ctx = e.detail.ctx;
    repaint();
  }

  function onClick(e) {
    if (lastClickedArc !== null) {
      lastClickedArc.render(ctx, ganttchart.center, ganttchart.radius, '#00ffff');
    }
    clickOffsetX = e.detail.offsetX;
    clickOffsetY = e.detail.offsetY;
    clickDebugMessage =   `clicked ${clickOffsetX}, ${clickOffsetY}`;
    let clickedArc = getIntersectedArc(clickOffsetX, clickOffsetY);
    if (clickedArc !== null) {
      clickedArc.render(ctx, ganttchart.center, ganttchart.radius, '#0000ff');
      lastClickedArc = clickedArc;
    } else {
      lastClickedArc.render(ctx, ganttchart.center, ganttchart.radius, '#00ffff');
      lastClickedArc = null;
    }
  }

  function onMouseMove(e) {
    hoverAbsoluteX = e.detail.clientX;
    hoverAbsoluteY = e.detail.clientY;

    hoverTop = hoverAbsoluteY + 2;
    hoverLeft = hoverAbsoluteX + 2;

    hoverOffsetX = e.detail.offsetX;
    hoverOffsetY = e.detail.offsetY;
    intersectedArc = getIntersectedArc(hoverOffsetX, hoverOffsetY);
  }
</script>
<style lang="scss">
.pie-root {
  vertical-align: middle;
  z-index: 2;
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
    on:click={onClick}
    on:mousemove={onMouseMove}></Canvas>
  <Portal isOpen={intersectedArc !== null}  zIndex={2} styles={styles}>
    <div class="hover-label">
      <p>HoverPosition: x(left): {hoverLeft} , y(top): {hoverTop}</p>
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