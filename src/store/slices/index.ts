import appSlice from './appSlice';
import userSlice from './userSlice';

const rootReducer = {
  app: appSlice.reducer,
  user: userSlice.reducer,
};

export default rootReducer;
