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

type PositionType = {
  targetBoundingRect: DOMRectReadOnly;
  hAlign: HAlign;
  vAlign: VAlign;
};

interface Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string;
}

class TopLeft implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.left}px;
            transform: translateY(-100%);
        `;
  }
}

class TopRight implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.right}px;
            transform: translate(-100%, -100%);
        `;
  }
}

class TopMiddle implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.right - targetBoundingRect?.width / 2}px;
            transform: translate(-50%, -100%);
        `;
  }
}

class BottomLeft implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    const top = targetBoundingRect?.bottom;
    const left = targetBoundingRect?.left;
    return `
            top: ${top}px;
            left: ${left}px;
        `;
  }
}

class BottomRight implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    return `
        top: ${targetBoundingRect?.bottom}px;
        left: ${targetBoundingRect?.right}px;
        transform: translateX(-100%);
        `;
  }
}

class BottomMiddle implements Alignment {
  getCSS(targetBoundingRect: DOMRectReadOnly): string {
    return `
        top: ${targetBoundingRect?.bottom}px;
        left: ${targetBoundingRect?.right - targetBoundingRect?.width / 2}px;
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

function getAlignment(positionType: PositionType): string {
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
  return alignment.getCSS(positionType.targetBoundingRect);
}

export { getAlignment };
export { PositionType };
