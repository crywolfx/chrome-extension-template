import { AxiosRequestConfig, AxiosResponse } from 'axios';
import proxyEvent from './event';

type AxiosInstance = {
  <T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
};

export function createAxiosInstance(
  customConfig: AxiosRequestConfig = {}
): AxiosInstance {
  const instance: AxiosInstance = async <T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ) => {
    const data = await proxyEvent.emit('request', {
      ...customConfig,
      ...config,
    });
    if (data?.success) return data.data as R;
    return Promise.reject(data?.data);
  };

  // 添加其他请求方法
  instance.get = (url, config) => instance({ ...config, method: 'GET', url });
  instance.post = (url, data, config) =>
    instance({ ...config, method: 'POST', url, data });

  return instance;
}

const proxyRequestInstance = createAxiosInstance();

export default proxyRequestInstance;
