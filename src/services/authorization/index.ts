import {comparePassword, hashPassword} from 'helpers/password';
import {DataStorageResponse, LoginRequest, SignUpRequest} from './type';
import {LocalStorage} from 'helpers/localStorage';
import {STORAGE_KEY} from 'constants/index';
import {UserCredential} from 'customHooks/useCredentialHandler/type';

// Add this function to get all user data from Local Storage
const getAllUsers = async (): Promise<DataStorageResponse[]> => {
  try {
    const allData = await LocalStorage.getDataObject<DataStorageResponse[]>(
      STORAGE_KEY.KEY_STORE_DATA,
    );
    return allData || [];
  } catch (error) {
    return [];
  }
};

export const loginAPI = async (
  data: LoginRequest,
): Promise<UserCredential | false> => {
  try {
    // Get all user data from Local Storage
    const allUsers = await getAllUsers();

    // Find user by email
    const foundUser = allUsers.find(user => user.email === data.email);

    if (!foundUser) {
      return false; // User does not exist
    }

    // Compare password
    const isMatch = await comparePassword(
      data.password,
      foundUser.password || '',
    );
    if (!isMatch) {
      return false; // Passwords do not match
    }

    // Return user information if login successful
    return {
      username: foundUser.username,
      email: foundUser.email,
      fullName: foundUser.fullName,
    };
  } catch (error) {
    return false;
  }
};

export const signUp = async (
  data: SignUpRequest,
): Promise<UserCredential | false> => {
  try {
    // Create a new user object
    const newUser: DataStorageResponse = {
      username: data.username,
      email: data.email,
      fullName: data.fullName,
      password: await hashPassword(data.password),
    };

    // Get all user data from Local Storage
    const allUsers = await getAllUsers();

    // Add new user to the array
    const updatedUsers = [...allUsers, newUser];

    // Save updated user array to Local Storage
    await LocalStorage.storeDataByObject(
      STORAGE_KEY.KEY_STORE_DATA,
      updatedUsers,
    );

    // Return new user information if sign up successful
    return {
      username: newUser.username,
      email: newUser.email,
      fullName: newUser.fullName,
    };
  } catch (error) {
    return false;
  }
};
