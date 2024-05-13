import {Platform} from 'react-native';
export const isIOS = Boolean(Platform.OS === 'ios');

export const STORAGE_KEY = {
  KEY_AUTH: 'BIC_TO_DO_APP_AUTH',
  KEY_STORE_DATA_AUTH: 'BIC_TO_DO_APP_STORE_DATA_AUTH',
  KEY_STORE_DATA_TASK: 'BIC_TO_DO_APP_STORE_DATA_TASK',
};
