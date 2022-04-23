// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.


function get_size_class(sz: string) {
  let css_class = "ip-toggle-sz-small";
  switch(sz) {
      case 'md':
        css_class = 'ip-toggle-sz-medium';
        break;
      case 'lg':
        css_class =  'ip-toggle-sz-large';
        break;
      case 'sm':
      default:
        css_class =  'ip-toggle-sz-small';
        break;
  }
  return css_class;
}  


export {get_size_class};
