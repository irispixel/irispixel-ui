// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect, Alignment, getAlignmentCSS } from './rect';

export enum PopoverPosition {
  TopLeft = 'top-left',
  TopMiddle = 'top-middle',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomMiddle = 'bottom-middle',
  BottomRight = 'bottom-right'
}

class TopLeft implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.left}px;
            transform: translateY(-100%);
        `;
  }
}

class TopRight implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.right}px;
            transform: translate(-100%, -100%);
        `;
  }
}

class TopMiddle implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.right - elementRect.width / 2}px;
            transform: translate(-50%, -100%);
        `;
  }
}

class BottomLeft implements Alignment {
  getCSS(elementRect: ElementRect): string {
    const top = elementRect.bottom;
    const left = elementRect.left;
    return `
            top: ${top}px;
            left: ${left}px;
        `;
  }
}

class BottomRight implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
        top: ${elementRect.bottom}px;
        left: ${elementRect.right}px;
        transform: translateX(-100%);
        `;
  }
}

class BottomMiddle implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
        top: ${elementRect.bottom}px;
        left: ${elementRect.right - elementRect.width / 2}px;
        transform: translateX(-50%);
        `;
  }
}
const topLeft = new TopLeft();
const topRight = new TopRight();
const topMiddle = new TopMiddle();

const bottomLeft = new BottomLeft();
const bottomRight = new BottomRight();
const bottomMiddle = new BottomMiddle();

class PopoverPositionRegistry {
  map = new Map<PopoverPosition, Alignment>();

  constructor() {
    this.map.set(PopoverPosition.TopMiddle, topMiddle);
    this.map.set(PopoverPosition.TopLeft, topLeft);
    this.map.set(PopoverPosition.TopRight, topRight);
    this.map.set(PopoverPosition.BottomMiddle, bottomMiddle);
    this.map.set(PopoverPosition.BottomLeft, bottomLeft);
    this.map.set(PopoverPosition.BottomRight, bottomRight);
  }

  getAlignment(position: PopoverPosition): Alignment | undefined {
    return this.map.get(position);
  }
}

const positionRegistry = new PopoverPositionRegistry();

export function getPopoverStyles(position: PopoverPosition) {
  return (elementRect: ElementRect) => {
    return `position: absolute; ${getAlignmentCSS(position, elementRect, positionRegistry)}`;
  };
}
