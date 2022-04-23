// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

function get_darkmode_color_class(color: string): string {
    switch (color) {
        case 'primary':
            return 'l-bg-primary';
        case 'secondary':
            return 'l-bg-secondary';
        case 'tertiary':
            return  'l-bg-tertiary';
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

function get_color_class(color: string, darkmode: boolean): string {
    return darkmode ? get_darkmode_color_class(color): get_lightmode_color_class(color);

}

export {get_color_class};
