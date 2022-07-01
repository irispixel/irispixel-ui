// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect, Alignment, getAlignmentCSS } from '@irispixel/common-popover';
import { top, topLeft, topRight, bottom, bottomLeft, bottomRight } from './dropdown-common';

export enum DropdownPosition {
  Top = 'top',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}

class DropdownPositionRegistry {
  map = new Map<DropdownPosition, Alignment>();

  constructor() {
    this.map.set(DropdownPosition.Top, top);
    this.map.set(DropdownPosition.TopLeft, topLeft);
    this.map.set(DropdownPosition.TopRight, topRight);
    this.map.set(DropdownPosition.Bottom, bottom);
    this.map.set(DropdownPosition.BottomLeft, bottomLeft);
    this.map.set(DropdownPosition.BottomRight, bottomRight);
  }

  getAlignment(position: DropdownPosition): Alignment | undefined {
    return this.map.get(position);
  }
}

const positionRegistry = new DropdownPositionRegistry();

export function getDropdownStyles(position: DropdownPosition) {
  return (elementRect: ElementRect) => {
    return `position: absolute; ${getAlignmentCSS(position, elementRect, positionRegistry)}`;
  };
}
