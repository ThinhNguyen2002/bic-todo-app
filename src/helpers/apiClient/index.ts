import axios from 'axios';
import qs from 'qs';
import {PathLike} from 'fs';
import interceptorConfig from './apiConfigs';

const instance = axios.create({
  baseURL: 'API_FULL_URL',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
  paramsSerializer: (params: PathLike) =>
    qs.stringify(params, {indices: false}),
});

instance.interceptors.request.use(
  interceptorConfig.requestInterceptor,
  interceptorConfig.requestError,
);

instance.interceptors.response.use(
  interceptorConfig.responseInterceptor,
  interceptorConfig.responseError,
);

const axiosInstance = instance;

export default axiosInstance;
