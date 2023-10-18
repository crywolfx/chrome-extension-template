import axios from 'axios';

const requestInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

requestInstance.defaults.withCredentials = true;
requestInstance.defaults.timeout = 30 * 1000;


export default requestInstance;