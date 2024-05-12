import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TaskItemType} from 'models/task';
import {BottomTabParamList} from 'navigation/type';

export type HomeScreenProps = NativeStackScreenProps<
  BottomTabParamList,
  'HomeScreen'
>;

export type TaskDataList = {title: string | ''; data: TaskItemType[]};
