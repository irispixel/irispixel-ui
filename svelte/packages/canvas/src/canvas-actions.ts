// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.

function context2D(el: HTMLCanvasElement) {
    if (el.getContext) {
        const ctx = el.getContext('2d');
        el.dispatchEvent(
            new CustomEvent('newcontext', {
                detail: {
                    hello: 'world'
                }
            }));
    }
}

export { context2D };

