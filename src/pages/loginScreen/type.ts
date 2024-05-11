import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';

export type LoginProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type UserLoginFormType = {
  email: string;
  password: string;
};
