import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialAppSlideState} from './type';

const initialState: InitialAppSlideState = {
  isLoading: false,
  isShowLoadingIcon: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsShowLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsShowLoadingWithIcon: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.isShowLoadingIcon = action.payload;
    },
  },
});
export const {setIsShowLoading, setIsShowLoadingWithIcon} = appSlice.actions;

export default appSlice;
