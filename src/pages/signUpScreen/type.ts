import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/type';

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type UserSignUpFormType = {
  email: string;
  password: string;
  username: string;
  fullName: string;
  checkbox: boolean;
};
