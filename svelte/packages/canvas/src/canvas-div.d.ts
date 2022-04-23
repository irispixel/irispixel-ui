// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onintersect?: (e: CustomEvent<any>) => void;

    }

}