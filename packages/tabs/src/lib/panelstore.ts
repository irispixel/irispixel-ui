// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';

export type IPanelStore = {
  subscribePanel: (fnSubscribe: (value: Symbol) => void) => void;
  registerPanel: (panel: Symbol) => void;
  selectPanel: (i: number) => void;
};

function createPanelstore() {
  const panels: Array<Symbol> = [];
  const { subscribe, set, update } = writable<Symbol>();
  return {
    subscribePanel: (fnSubscribe: (value: Symbol) => void) => {
      const unsubscribe = subscribe(fnSubscribe);
      onDestroy(unsubscribe);
    },
    registerPanel: (panel: Symbol) => {
      panels.push(panel);
      update((current) => current || panel);

      onDestroy(() => {
        const i = panels.indexOf(panel);
        panels.splice(i, 1);
        update((current) => (current === panel ? panels[i] || panels[panels.length - 1] : current));
      });
    },
    selectPanel: (i: number) => {
      set(panels[i]);
    }
  };
}

const keyPanelContext = Symbol();
const panelstore = createPanelstore();

export { panelstore, keyPanelContext };
