import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialUserSlideState} from './type';

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
  },
});
export const {setIsLogin} = userSlice.actions;

export default userSlice;
