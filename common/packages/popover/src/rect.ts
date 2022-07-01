// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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

export const zeroRect = new ElementRect(0, 0, 0, 0);

export interface Alignment {
  getCSS(elementRect: ElementRect): string;
}

export interface AlignmentRegistry<T> {
  getAlignment: (position: T) => Alignment | undefined;
}

export function getAlignmentCSS<T>(
  position: T,
  elementRect: ElementRect,
  positionRegistry: AlignmentRegistry<T>
): string {
  if (elementRect === null || elementRect === undefined) {
    return '';
  }
  let alignment = positionRegistry.getAlignment(position);
  if (!alignment) {
    throw new Error(`Invalid position type ${position}`);
  }
  return alignment.getCSS(elementRect);
}

export type FnGetStyles = (elementRect: ElementRect) => string;

export function getEmptyStyles(elementRect: ElementRect): string {
  return '';
}

export function getElementRect(element: HTMLElement): ElementRect {
  let x = 0;
  let y = 0;
  let width = element ? element.offsetWidth : 0;
  let height = element ? element.offsetHeight : 0;
  let el: HTMLElement | null = element;
  while (el) {
    if (!isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft + el.clientLeft;
      y += el.offsetTop - el.scrollTop + el.clientTop;
    }
    el = el.offsetParent as HTMLElement;
  }
  return new ElementRect(x, y, width, height);
}
