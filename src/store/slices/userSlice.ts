import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialUserSlideState} from './type';
import {TaskItemType} from 'models/task';

const initialState: InitialUserSlideState = {
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setListTaskData: (state, action: PayloadAction<TaskItemType[]>) => {
      state.listTask = action.payload;
    },
    updateListTask: (state, action: PayloadAction<TaskItemType>) => {
      const data = state.listTask;
      const newData = data ? [...data, action.payload] : [action.payload];

      state.listTask = newData;
    },
    updateItemInListTask: (state, action: PayloadAction<TaskItemType>) => {
      const data = state.listTask;

      // Handle update item in list task
      if (data) {
        const newData = data.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        });

        state.listTask = newData;
      }
    },
  },
});
export const {
  setIsLogin,
  setListTaskData,
  updateListTask,
  updateItemInListTask,
} = userSlice.actions;

export default userSlice;
