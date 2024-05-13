import {CreateTaskRequest, DataTaskResponse} from './type';
import {LocalStorage} from 'helpers/localStorage';
import {STORAGE_KEY} from 'constants/index';
import {UserCredential} from 'customHooks/useCredentialHandler/type';

export const createNewTask = async (
  data: CreateTaskRequest,
): Promise<boolean> => {
  try {
    const user = await LocalStorage.getDataObject<UserCredential>(
      STORAGE_KEY.KEY_STORE_DATA_AUTH,
    );

    if (!user) {
      return false;
    }

    const allTaskData = await LocalStorage.getDataObject<DataTaskResponse[]>(
      STORAGE_KEY.KEY_STORE_DATA_TASK,
    );

    const newTaskData: DataTaskResponse = {
      email: user.email,
      data: [data],
    };

    if (!allTaskData) {
      await LocalStorage.storeDataByObject(STORAGE_KEY.KEY_STORE_DATA_TASK, [
        newTaskData,
      ]);
      return true;
    }

    const index = allTaskData.findIndex(item => item.email === user.email);

    if (index === -1) {
      allTaskData.push(newTaskData);
    } else {
      allTaskData[index].data.push(data);
    }

    await LocalStorage.storeDataByObject(
      STORAGE_KEY.KEY_STORE_DATA_TASK,
      allTaskData,
    );

    return true;
  } catch (error) {
    return false;
  }
};

// Function to get list of task
export const getListTask = async () => {
  try {
    const allTaskData = await LocalStorage.getDataObject<DataTaskResponse[]>(
      STORAGE_KEY.KEY_STORE_DATA_TASK,
    );

    // Get email of user from local storage
    const user = await LocalStorage.getDataObject<UserCredential>(
      STORAGE_KEY.KEY_STORE_DATA_AUTH,
    );

    if (!allTaskData || !user) {
      return [];
    }

    // Find the task data of the user
    const taskData = allTaskData.find(item => item.email === user.email);

    // If the task data is not found, return empty array
    if (!taskData) {
      return [];
    }

    // Return the task data
    return taskData.data;
  } catch (error) {
    return [];
  }
};

export const updateTask = async (data: CreateTaskRequest) => {
  try {
    const allTaskData = await LocalStorage.getDataObject<DataTaskResponse[]>(
      STORAGE_KEY.KEY_STORE_DATA_TASK,
    );
    // Get email of user from local storage
    const user = await LocalStorage.getDataObject<UserCredential>(
      STORAGE_KEY.KEY_STORE_DATA_AUTH,
    );

    if (!allTaskData) {
      return false;
    }

    const index = allTaskData.findIndex(item => item.email === user?.email);

    if (index === -1) {
      return false;
    }

    // Find the task data of the user
    const taskData = allTaskData[index].data;

    // Find the task index
    const taskIndex = taskData.findIndex(item => item.id === data.id);

    // If the task index is not found, return false
    if (taskIndex === -1) {
      return false;
    }

    // Update the task data
    taskData[taskIndex] = data;

    // Update the task data to local storage
    allTaskData[index].data = taskData;

    await LocalStorage.storeDataByObject(
      STORAGE_KEY.KEY_STORE_DATA_TASK,
      allTaskData,
    );

    return true;
  } catch (error) {
    return false;
  }
};
