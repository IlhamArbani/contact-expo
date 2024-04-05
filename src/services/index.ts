import axios from 'axios';
const baseURL = 'https://contact.herokuapp.com/';

const Axios = axios.create({
  baseURL,
  timeout: 5000000
})

Axios.interceptors.request.use(
  async (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

export default Axios;