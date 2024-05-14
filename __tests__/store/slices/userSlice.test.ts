import {describe, expect, it, beforeEach} from '@jest/globals';
import {configureStore} from '@reduxjs/toolkit';
import userSlice, {
  setIsLogin,
  setListTaskData,
  updateListTask,
  updateItemInListTask,
} from 'store/slices/userSlice';
import {TaskItemType} from 'models/task';

describe('userSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userSlice.reducer,
      },
    });
  });

  it('should handle setIsLogin', () => {
    const isLogin = true;
    store.dispatch(setIsLogin(isLogin));
    expect(store.getState().user.isLogin).toBe(isLogin);
  });

  it('should handle setListTaskData', () => {
    const listTask: TaskItemType[] = [
      {id: 1, title: 'Task 1'},
      {id: 2, title: 'Task 2'},
    ];
    store.dispatch(setListTaskData(listTask));
    expect(store.getState().user.listTask).toEqual(listTask);
  });

  it('should handle updateListTask', () => {
    const task: TaskItemType = {id: 3, title: 'Task 3'};
    store.dispatch(updateListTask(task));
    expect(store.getState().user.listTask).toContainEqual(task);
  });

  it('should handle updateItemInListTask', () => {
    const initialListTask: TaskItemType[] = [
      {id: 1, title: 'Task 1'},
      {id: 2, title: 'Task 2'},
    ];
    const updatedTask: TaskItemType = {id: 2, title: 'Updated Task 2'};
    const expectedListTask: TaskItemType[] = [
      {id: 1, title: 'Task 1'},
      {id: 2, title: 'Updated Task 2'},
    ];

    store.dispatch(setListTaskData(initialListTask));
    store.dispatch(updateItemInListTask(updatedTask));

    expect(store.getState().user.listTask).toEqual(expectedListTask);
  });
});
