import {describe, expect, it, beforeEach} from '@jest/globals';
import {configureStore} from '@reduxjs/toolkit';
import bottomSheetSlice, {setBottomSheetAction} from 'store/slices/bottomSheet';

describe('bottomSheetSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        bottomSheet: bottomSheetSlice.reducer,
      },
    });
  });

  it('should handle setBottomSheetAction', () => {
    const action = {type: 'SOME_ACTION', payload: 'some payload'};
    store.dispatch(setBottomSheetAction(action));
    expect(store.getState().bottomSheet.action).toEqual(action);
  });
});
