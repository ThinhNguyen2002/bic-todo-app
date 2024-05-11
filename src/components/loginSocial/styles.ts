import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';
import {SIZE_VALUE} from 'constants/size';

export const styles = StyleSheet.create({
  loginWithSocialContainer: {
    marginTop: SIZE_VALUE._20,
  },
  breakLineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  breakLine: {
    flex: 1,
    width: '100%',
    height: SIZE_VALUE._1,
    backgroundColor: COLORS.border,
  },
  breakLineText: {
    textAlign: 'center',
    flex: 1,
  },
  socialIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZE_VALUE._20,
    width: SIZE_VALUE._200,
    alignSelf: 'center',
  },
});
