// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ElementRect, Alignment, getAlignmentCSS } from '@irispixel/common-popover';
import { top, bottom } from './dropdown-common';

export enum DropdownListPosition {
  Top = 'top',
  Bottom = 'bottom'
}

class DropdownListPositionRegistry {
  map = new Map<DropdownListPosition, Alignment>();

  constructor() {
    this.map.set(DropdownListPosition.Top, top);
    this.map.set(DropdownListPosition.Bottom, bottom);
  }

  getAlignment(position: DropdownListPosition): Alignment | undefined {
    return this.map.get(position);
  }
}

const positionRegistry = new DropdownListPositionRegistry();

export function getDropdownListStyles(position: DropdownListPosition) {
  return (elementRect: ElementRect) => {
    return `position: absolute; ${getAlignmentCSS(position, elementRect, positionRegistry)}`;
  };
}
