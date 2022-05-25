// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

function get_darkmode_color_class(color: string): string {
  switch (color) {
    case 'primary':
      return 'l-bg-primary';
    case 'secondary':
      return 'l-bg-secondary';
    case 'tertiary':
      return 'l-bg-tertiary';
    case 'quaternary':
      return 'l-bg-quaternary';
    case 'quinary':
      return 'l-bg-quinary';
    default:
      return 'l-bg-primary';
  }
}

function get_lightmode_color_class(color: string): string {
  switch (color) {
    case 'primary':
      return 'l-primary';
    case 'secondary':
      return 'l-secondary';
    case 'tertiary':
      return 'l-tertiary';
    case 'quaternary':
      return 'l-quaternary';
    case 'quinary':
      return 'l-quinary';
    default:
      return 'l-primary';
  }
}

function get_color_class(color: string, darkmode: boolean): string {
  return darkmode ? get_darkmode_color_class(color) : get_lightmode_color_class(color);
}

export { get_color_class };
