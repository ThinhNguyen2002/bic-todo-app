import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoading: state => {
      state.loading = true;
    },
  },
});

export default appSlice;
