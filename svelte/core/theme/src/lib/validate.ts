// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function validate_sz(sz: string): boolean {
  switch (sz) {
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
    case 'xs':
      return true;
    default:
      return false;
  }
}

function validate_color(color: string): boolean {
  switch (color) {
    case 'secondary':
    case 'primary':
      return true;
    default:
      return false;
  }
}

export { validate_sz, validate_color };
