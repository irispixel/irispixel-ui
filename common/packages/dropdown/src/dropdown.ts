// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export interface DropdownItem {
  id: string;
}

export function isArrayOfStrings(obj: any): boolean {
  return Array.isArray(obj) && obj.every((item) => typeof item === 'string');
}

export function isADropdownItem(obj: any): obj is DropdownItem {
  return 'id' in obj;
}

export function isAnArrayofDropdownItems(obj: any): obj is DropdownItem {
  return Array.isArray(obj) && obj.every((item) => isADropdownItem(item));
}

export function validate(items: Array<any>): boolean {
  if (items) {
    if (!Array.isArray(items)) {
      throw new Error(`Dropdown 'items' prop should be an array - ${typeof items}`);
    }
    if (isArrayOfStrings(items) || isAnArrayofDropdownItems(items)) {
      // Very good. Either an array of string or an array of DropdownItems
    } else {
      throw new Error(
        `Invalid Dropdown 'items' prop - - ${typeof items}. It should be an array of strings or an array of classes implementing 'DropdownItems's.`
      );
    }
  }
  return true;
}
