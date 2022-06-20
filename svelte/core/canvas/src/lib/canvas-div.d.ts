// Copyright (c) 2022 IrisPixel
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onintersect?: (e: CustomEvent<any>) => void;
  }
}
