import { getTab } from 'chrome-extension-core';

(() => {
  const debounce = (fn: (...props: any[]) => any, delay = 100) => {
    let timer: any = null;
    return function (this: any, ...props: any) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...props);
        clearTimeout(timer);
        timer = null;
      }, delay);
    };
  };

  const hotLog = (msg: string) => {
    console.log(`[chrome-hot-background]: ${msg}`);
  };
  const ws = new WebSocket(`ws://${process.env.WDS_SOCKET_HOST}:${process.env.WDS_SOCKET_PORT}${process.env.WDS_SOCKET_PATH}`);
  const onMessage = async () => {
    hotLog('start refresh');
    const tab = await getTab({ active: true });
  }
  ws.onopen = () => { 
    hotLog('connect open');
   }
  ws.onmessage = debounce(onMessage)
  ws.onclose = () => { 
    hotLog('connect closed');
   }
  ws.onerror = () => { 
    hotLog('connect error');
   }
})()