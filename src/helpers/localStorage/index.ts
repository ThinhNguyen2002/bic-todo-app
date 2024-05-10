import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataByString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (e) {
    // saving error
  }
};

const storeDataByObject = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@${key}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getDataString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
  return '';
};

const getDataObject = async <T>(key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`);
    return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
  } catch (e) {
    // error reading value
  }
  return null;
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
    return true;
  } catch (e) {
    // error reading value
  }
  return false;
};

export const LocalStorage = {
  storeDataByString,
  storeDataByObject,
  getDataString,
  getDataObject,
  removeData,
};
