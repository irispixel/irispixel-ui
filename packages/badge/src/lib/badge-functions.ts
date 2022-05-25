// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

function get_valign_class(valign: string): string {
  let valign_class = 'valign-middle';
  switch (valign) {
    case 'middle':
      valign_class = 'valign-middle';
      break;
    case 'baseline':
      valign_class = 'valign-baseline';
      break;
    case 'top':
      valign_class = 'valign-top';
      break;
    case 'bottom':
      valign_class = 'valign-bottom';
      break;
    default:
      // TODO: Throw an exception here
      valign_class = 'valign-baseline';
      break;
  }
  return valign_class;
}

function get_halign_class(halign: string): string {
  let halign_class = 'halign-right';
  switch (halign) {
    case 'left':
      halign_class = 'halign-left';
      break;
    case 'right':
      halign_class = 'halign-right';
      break;
    default:
      halign_class = 'halign-right';
      break;
  }
  return halign_class;
}

function get_shape_class(shape: string, dark_mode: boolean): string {
  return 'l-border-circle';
}

export { get_valign_class, get_halign_class, get_shape_class };
