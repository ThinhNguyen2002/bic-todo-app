import {BottomSheetAction} from 'components/bottomSheetTask/type';
import {TaskItemType} from 'models/task';

export type InitialAppSlideState = {
  isLoading: boolean;
  isShowLoadingIcon: boolean;
};

export type InitialUserSlideState = {
  isLogin: boolean;
  listTask?: TaskItemType[];
};

export type InitialBottomSheetSlideState = {
  action?: BottomSheetAction;
};
