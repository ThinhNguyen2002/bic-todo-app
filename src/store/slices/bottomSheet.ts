import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialBottomSheetSlideState} from './type';
import {BottomSheetAction} from 'components/bottomSheetTask/type';

const initialState: InitialBottomSheetSlideState = {};

const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    setBottomSheetAction: (
      state,
      action: PayloadAction<BottomSheetAction | undefined>,
    ) => {
      state.action = action.payload;
    },
  },
});
export const {setBottomSheetAction} = bottomSheetSlice.actions;

export default bottomSheetSlice;
