// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { ElementRect, Alignment } from '@irispixel/common-popover';

class Top implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.left}px;
            transform: translateY(-100%);
            width: ${elementRect.width}px;
        `;
  }
}

class TopLeft implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.left}px;
            transform: translateY(-100%);
            min-width: ${elementRect.width}px;
        `;
  }
}

class TopRight implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
            top: ${elementRect.top}px;
            left: ${elementRect.right}px;
            transform: translate(-100%, -100%);
            min-width: ${elementRect.width}px;
        `;
  }
}

class Bottom implements Alignment {
  getCSS(elementRect: ElementRect): string {
    const top = elementRect.bottom;
    const left = elementRect.left;
    return `
            top: ${top}px;
            left: ${left}px;
            width: ${elementRect.width}px;
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
            min-width: ${elementRect.width}px;
        `;
  }
}

class BottomRight implements Alignment {
  getCSS(elementRect: ElementRect): string {
    return `
        top: ${elementRect.bottom}px;
        left: ${elementRect.right}px;
        transform: translateX(-100%);
        min-width: ${elementRect.width}px;
        `;
  }
}

export const topLeft = new TopLeft();
export const topRight = new TopRight();
export const top = new Top();

export const bottomLeft = new BottomLeft();
export const bottomRight = new BottomRight();
export const bottom = new Bottom();
