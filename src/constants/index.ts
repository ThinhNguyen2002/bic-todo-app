import {Platform} from 'react-native';

var env = require('../../env.json');

export const MODE = env.MODE;
export const isIOS = Boolean(Platform.OS === 'ios');

export const STORAGE_KEY = {
  KEY_AUTH: '',
};
