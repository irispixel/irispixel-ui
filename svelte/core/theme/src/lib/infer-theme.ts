// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const Dark = 'dark';
const Light = 'light';

const themeKey = 'theme';

function get_theme() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem(themeKey)) {
    return localStorage.getItem(themeKey);
  }
}

function set_theme(t: string) {
  console.log(`set theme - ${t}`);
  localStorage.setItem(themeKey, t);
}

function remove_theme() {
  localStorage.removeItem(themeKey);
}

function infer_theme() {
  const existing_theme = get_theme();
  console.log(`get theme - ${existing_theme}`);
  if (existing_theme !== undefined || existing_theme !== null) {
    return existing_theme;
  }
  if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Dark;
  }
  return Light;
}

function setDefaultBody() {
  if (typeof window !== 'undefined') {
    window.document.body.classList.add('scheme');
  }
}
function attachToBody(darkmode: boolean) {
  if (typeof window !== 'undefined') {
    console.log(`About to flip classes - darkmode ${darkmode}`);
    window.document.body.classList.add(darkmode ? 'dark' : 'light');
    window.document.body.classList.remove(darkmode ? 'light' : 'dark');
  }
}

function set_theme_preload(triggered: boolean, darkmode: boolean) {
  if (triggered) {
    console.log(`set theme triggered - ${triggered}`);
    set_theme(darkmode ? Dark : Light);
    attachToBody(darkmode);
  }
}

export { infer_theme, Dark, Light, set_theme_preload, setDefaultBody, remove_theme };
