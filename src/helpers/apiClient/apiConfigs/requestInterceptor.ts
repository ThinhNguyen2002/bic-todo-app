import axios, {AxiosRequestConfig} from 'axios';
import {STORAGE_KEY} from 'constants/index';
import {LocalStorage} from 'helpers/localStorage';
import {AuthInfo} from 'models/auth';
import {store} from 'store';

export const requestInterceptor = async (config: AxiosRequestConfig) => {
  config.timeout = 30000;

  const isNetworkVariable = store.getState().app.loading;
  if (!isNetworkVariable) {
    throw new axios.Cancel('Internet was lost.');
  } else {
    const dataLocal = await LocalStorage.getDataObject<AuthInfo>(
      STORAGE_KEY.KEY_AUTH,
    );

    if (dataLocal) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${dataLocal.token}`,
      };
    }
  }
  return config;
};
