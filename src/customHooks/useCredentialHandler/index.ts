import {STORAGE_KEY} from 'constants/index';
import {LocalStorage} from 'helpers/localStorage';
import {useAppDispatch} from 'store';
import {setIsLogin} from 'store/slices/userSlice';
import {UserCredential} from './type';

export function useCredentialHandler() {
  const dispatch = useAppDispatch();

  /**
   * Update new credential
   * @param credential - UserCredential
   * username: string;
   * email: string;
   * fullName: string;
   */
  const setLoginWithNewCredential = async (credential: UserCredential) => {
    dispatch(setIsLogin(true));
    await LocalStorage.storeDataByObject(STORAGE_KEY.KEY_AUTH, credential);
  };

  const setLogout = async () => {
    dispatch(setIsLogin(false));
    await LocalStorage.removeData(STORAGE_KEY.KEY_AUTH);
  };

  /**
   * Checks if the user is logged in by retrieving the user credentials from local storage.
   * If the user has a refresh token, it sets the login state to true.
   */
  const checkUserLogin = async () => {
    const dataLocal = await LocalStorage.getDataObject<UserCredential>(
      STORAGE_KEY.KEY_AUTH,
    );

    if (dataLocal?.email) {
      dispatch(setIsLogin(true));
    }
  };

  return {
    setLoginWithNewCredential,
    setLogout,
    checkUserLogin,
  };
}
