import appSlice from './appSlice';
import bottomSheetSlice from './bottomSheet';
import userSlice from './userSlice';

const rootReducer = {
  app: appSlice.reducer,
  user: userSlice.reducer,
  bottomSheet: bottomSheetSlice.reducer,
};

export default rootReducer;
