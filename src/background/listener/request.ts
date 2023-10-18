import requestInstance from 'src/common/request/direct';
import proxyEvent from 'src/common/request/event';

export const initRequest = () => {
  proxyEvent.on('request', async (data) => {
    try {
      const result = await requestInstance.get(data.url || '');
      return {
        data: result,
        message: '',
        success: true,
      };
    } catch (error) {
      return {
        data: error,
        message: '',
        success: true,
      };
    }
  });
}
