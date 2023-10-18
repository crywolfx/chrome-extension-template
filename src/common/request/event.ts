import { AxiosRequestConfig } from 'axios';
import { ChromeEvent } from 'chrome-extension-core';

export type Event = {
  request: AxiosRequestConfig;
  test: number;
};

export type EventRes = {
  request: any;
  test: number;
};

const proxyEvent = new ChromeEvent<Event, EventRes>('proxy-request');

export default proxyEvent;
