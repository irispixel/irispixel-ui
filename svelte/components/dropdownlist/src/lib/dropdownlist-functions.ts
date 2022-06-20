// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function get_darkmode_color_class(color: string, outline: boolean): string {
  switch (color) {
    case 'primary':
      return outline ? 'l-border-primary l-bw1 l-border-solid' : 'l-bg-primary';
    case 'secondary':
      return outline ? 'border-secondary l-bw1 l-border-solid' : 'l-bg-secondary';
    case 'tertiary':
      return outline ? 'border-tertiary l-bw1 bs' : 'l-bg-tertiary';
    case 'quaternary':
      return outline ? 'border-quaternary l-bw1 bs' : 'l-bg-quaternary';
    case 'quinary':
      return outline ? 'border-quinary l-bw1 bs' : 'l-bg-quinary';
    default:
      return outline ? 'border-primary l-bw1 bs' : 'l-bg-primary';
  }
}

function get_lightmode_color_class(color: string, outline: boolean): string {
  switch (color) {
    case 'primary':
      return outline ? 'l-border-primary l-bw1 l-border-solid' : 'l-bg-primary';
    case 'secondary':
      return outline ? 'border-secondary l-bw1 l-border-solid' : 'l-bg-secondary';
    case 'tertiary':
      return outline ? 'border-tertiary l-bw1 bs' : 'l-bg-tertiary';
    case 'quaternary':
      return outline ? 'border-quaternary l-bw1 bs' : 'l-bg-quaternary';
    case 'quinary':
      return outline ? 'border-quinary l-bw1 bs' : 'l-bg-quinary';
    default:
      return outline ? 'border-primary l-bw1 bs' : 'l-bg-primary';
  }
}

function get_color_class(color: string, outline: boolean, darkmode: boolean): string {
  return darkmode
    ? get_darkmode_color_class(color, outline)
    : get_lightmode_color_class(color, outline);
}

export { get_color_class };
