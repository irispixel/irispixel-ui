// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

function get_darkmode_color_class(color: string): string {
  switch (color) {
    case 'primary':
      return 'l-modal-bg';
    case 'secondary':
      return 'l-modal-bg';
    case 'tertiary':
      return 'l-modal-bg';
    case 'quaternary':
      return 'l-modal-bg';
    case 'quinary':
      return 'l-modal-bg';
    default:
      return 'l-modal-bg';
  }
}

function get_lightmode_color_class(color: string): string {
  switch (color) {
    case 'primary':
      return 'l-modal-bg';
    case 'secondary':
      return 'l-modal-bg';
    case 'tertiary':
      return 'l-modal-bg';
    case 'quaternary':
      return 'l-modal-bg';
    case 'quinary':
      return 'l-modal-bg';
    default:
      return 'l-modal-bg';
  }
}

function get_color_class(color: string, darkmode: boolean): string {
  return darkmode ? get_darkmode_color_class(color) : get_lightmode_color_class(color);
}

function get_lightmode_backdrop_color_class(color: string): string {
  return 'l-modal-backdrop-bg';
}

function get_darkmode_backdrop_color_class(color: string): string {
  return 'l-modal-backdrop-bg';
}

function get_backdrop_color_class(color: string, darkmode: boolean): string {
  return darkmode
    ? get_darkmode_backdrop_color_class(color)
    : get_lightmode_backdrop_color_class(color);
}

export { get_color_class, get_backdrop_color_class };
