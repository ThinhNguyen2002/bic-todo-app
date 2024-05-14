import {describe, expect, it, beforeEach} from '@jest/globals';
import {configureStore} from '@reduxjs/toolkit';
import appSlice from 'store/slices/appSlice';

describe('appSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        app: appSlice.reducer,
      },
    });
  });

  it('should handle setIsShowLoading', () => {
    store.dispatch(appSlice.actions.setIsShowLoading(true));
    expect(store.getState().app.isLoading).toBe(true);
  });

  it('should handle setIsLogin', () => {
    store.dispatch(appSlice.actions.setIsShowLoadingWithIcon(true));
    expect(store.getState().app.isShowLoadingIcon).toBe(true);
  });
});
