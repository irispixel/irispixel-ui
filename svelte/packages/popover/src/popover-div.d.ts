// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.


declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onshowpopover?: (el: HTMLElement) => any;

        onhidepopover?: (el: HTMLElement) => any;

        ontogglepopover?: (el: HTMLElement) => any;

        onintersect?: (e: CustomEvent) => any;
    }

}