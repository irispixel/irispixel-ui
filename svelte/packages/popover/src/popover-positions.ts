// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

export const enum HAlign {
    Right = 'right',
    Middle = 'middle',
    Left = 'left'
}

export const enum VAlign {
    Top = 'top',
    Middle = 'middle',
    Bottom = 'bottom'
}

type PositionType = {
    targetBoundingRect: DOMRectReadOnly;
    hAlign: HAlign;
    vAlign: VAlign;
}

interface Alignment {
    getAlignClass(targetBoundingRect: DOMRectReadOnly): string;
}

class TopLeft implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
        return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.left}px;
            transform: translateY(-100%);
        `;
    }
}


class TopRight implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
        return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.right}px;
            transform: translate(-100%, -100%);
        `;
    }
}

class TopMiddle implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
        return `
            top: ${targetBoundingRect?.top}px;
            left: ${targetBoundingRect?.right - targetBoundingRect?.width / 2}px;
            transform: translate(-50%, -100%);
        `;
    }
}

class BottomLeft implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
        const top = targetBoundingRect?.bottom;
        const left = targetBoundingRect?.left;
        return `
            top: ${top}px;
            left: ${left}px;
        `;
    }
}


class BottomRight implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
        return `
        top: ${targetBoundingRect?.bottom}px;
        left: ${targetBoundingRect?.right}px;
        transform: translateX(-100%);
        `;
    }
}

class BottomMiddle implements Alignment {

    getAlignClass(targetBoundingRect: DOMRectReadOnly): string {
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
    return alignment.getAlignClass(positionType.targetBoundingRect);
}
  
export const enum CloseOnLeave {
    Target = 'target',
    Popover = 'popover'
}

export { getAlignment };
export type {PositionType};

