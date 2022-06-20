// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { writable } from 'svelte/store';

const keyDarkTheme = 'ctx-ip-theme-dark';

const darkThemeStore = writable(false);

const triggerThemeStore = writable(false);

export { keyDarkTheme, darkThemeStore, triggerThemeStore };
