import {BottomSheetAction} from 'components/bottomSheetTask/type';

export type InitialAppSlideState = {
  isLoading: boolean;
  isShowLoadingIcon: boolean;
};

export type InitialUserSlideState = {
  isLogin: boolean;
};

export type InitialBottomSheetSlideState = {
  action?: BottomSheetAction;
};
