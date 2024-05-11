import {StyleSheet} from 'react-native';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

export const styles = StyleSheet.create({
  wrapBtn: {
    alignSelf: 'center',
    width: '100%',
    height: SIZE_VALUE._48,
    backgroundColor: COLORS.white,
    borderRadius: SIZE_VALUE._10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  textBtn: {
    color: COLORS.white,
  },
  wrapBtnBorder: {
    borderWidth: SIZE_VALUE._4,
  },
  wrapBtnActive: {
    opacity: 1,
  },
});
