// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onshowpopover?: (el: HTMLElement) => any;

    onhidepopover?: (el: HTMLElement) => any;

    ontogglepopover?: (el: HTMLElement) => any;

    onintersect?: (e: CustomEvent) => any;
  }
}
