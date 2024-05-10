import {requestError} from './requestError';
import {requestInterceptor} from './requestInterceptor';
import {responseError} from './responseError';
import {responseInterceptor} from './responseInterceptor';

const interceptorConfig = {
  requestInterceptor,
  requestError,
  responseInterceptor,
  responseError,
};

export default interceptorConfig;
