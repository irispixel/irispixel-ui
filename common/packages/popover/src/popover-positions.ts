// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export enum HAlign {
  Right = 'right',
  Middle = 'middle',
  Left = 'left'
}

export enum VAlign {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom'
}

export enum CloseOnLeave {
  Target = 'target',
  Popover = 'popover'
}

export class ElementRect {
  x: number;
  y: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.left = x;
    this.top = y;
    this.bottom = y + height;
    this.right = x + width;
    this.width = width;
    this.height = height;
  }
}

type PositionType = {
  elementRect: ElementRect;
  hAlign: HAlign;
  vAlign: VAlign;
};

interface Alignment {
  getCSS(elementRect: ElementRect): string;
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

function doGetAlignmentCSS(positionType: PositionType): string {
  if (positionType.elementRect === null || positionType.elementRect === undefined) {
    return '';
  }
  let alignment = topLeft;
  switch (positionType.hAlign) {
    case HAlign.Right:
      switch (positionType.vAlign) {
        case VAlign.Bottom:
          alignment = bottomRight;
          break;
        case VAlign.Top:
        default:
          alignment = topRight;
          break;
      }
      break;
    case HAlign.Middle:
      switch (positionType.vAlign) {
        case VAlign.Bottom:
          alignment = bottomMiddle;
          break;
        case VAlign.Top:
        default:
          alignment = topMiddle;
          break;
      }
      break;
    case HAlign.Left:
    default:
      switch (positionType.vAlign) {
        case VAlign.Bottom:
          alignment = bottomLeft;
          break;
        case VAlign.Top:
        default:
          alignment = topLeft;
          break;
      }
      break;
  }
  return alignment.getCSS(positionType.elementRect);
}

function getAlignmentCSS(positionType: PositionType): string {
  return `position: absolute; ${doGetAlignmentCSS(positionType)}`;
}

export { getAlignmentCSS };
export { PositionType };
