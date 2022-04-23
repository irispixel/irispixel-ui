// Copyright  (C)  2021-2022 LumePixel. All Rights Reserved.


function initObserver(el: HTMLElement): IntersectionObserver {
    const config = {
      root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.dispatchEvent( new CustomEvent('intersect', { 
            detail: {
              entry: entry 
            }
          }))
        }
      });
    }, config);
    return observer;
}

function observe(el: HTMLElement) {
  const observer = initObserver(el);
  observer.observe(el);
  return {
      destroy() {
        observer.disconnect();
      }
  }  
}

export { observe } ;
