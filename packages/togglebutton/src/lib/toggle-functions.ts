// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

function get_size_class(sz: string) {
  let css_class = 'ip-toggle-sz-small';
  switch (sz) {
    case 'md':
      css_class = 'ip-toggle-sz-medium';
      break;
    case 'lg':
      css_class = 'ip-toggle-sz-large';
      break;
    case 'sm':
    default:
      css_class = 'ip-toggle-sz-small';
      break;
  }
  return css_class;
}

export { get_size_class };
