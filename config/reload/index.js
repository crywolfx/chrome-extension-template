
const ws = new WebSocket('ws://localhost:3000');
console.log(ws);
ws.onopen = () => { console.log("open"); }
ws.onmessage = () => { console.log("onmessage"); }
ws.onclose = () => { console.log("opeonclosen"); }
ws.onerror = () => { console.log("onerror"); }