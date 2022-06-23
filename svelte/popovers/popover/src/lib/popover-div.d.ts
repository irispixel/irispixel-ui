// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onshowpopover?: (el: HTMLElement) => any;

    onhidepopover?: (el: HTMLElement) => any;

    ontogglepopover?: (el: HTMLElement) => any;

    onintersect?: (e: CustomEvent) => any;

    onresize?: (e: CustomEvent) => any;
  }
}
