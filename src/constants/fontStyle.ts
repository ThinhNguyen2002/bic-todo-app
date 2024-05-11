import {StyleSheet} from 'react-native';
import {moderateScale} from 'helpers/responsive';
import {COLORS} from 'constants/colors';

// Font weight: 900
export const MONTSERRAT_BLACK = StyleSheet.create({
  _64: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(64),
  },
  _36: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(36),
  },
  _32: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(20),
  },
  _18: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(18),
  },
  _16: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(16),
  },
  _15: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(15),
  },
  _12: {
    fontFamily: 'Montserrat-Black',
    fontSize: moderateScale(12),
  },
});

// Font weight: 700
export const MONTSERRAT_BOLD = StyleSheet.create({
  _40: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(40),
  },
  _36: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(36),
  },
  _32: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
  },
  _18: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(18),
  },
  _16: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
  },
  _15: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(15),
  },
  _14: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
  },
  _12: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
  },
  _10: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(10),
  },
});

// Font weight: 600
export const MONTSERRAT_SEMI_BOLD = StyleSheet.create({
  _40: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(40),
  },
  _32: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(20),
  },
  _16: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(16),
  },
  _15: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(15),
  },
  _14: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(14),
  },
  _12: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(12),
  },
  _10: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(10),
  },
});

// Font weight: 800
export const MONTSERRAT_EXTRA_BOLD = StyleSheet.create({
  _48: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(48),
  },
  _32: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(20),
  },
  _18: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(18),
  },
  _16: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(16),
  },
  _14: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(14),
  },
  _12: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(12),
  },
});

// Font weight: 500
export const MONTSERRAT_MEDIUM = StyleSheet.create({
  _32: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(20),
  },
  _16: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(16),
  },
  _14: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(14),
  },
  _12: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(12),
  },
  _10: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(10),
  },
  _8: {
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(8),
  },
});

// Font weight: 400
export const MONTSERRAT_REGULAR = StyleSheet.create({
  _14: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
  },
  _13: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(13),
  },
  _12: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  _10: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
  },
});

export const SHADOW_VIEW = {
  shadowColor: COLORS.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
};

export const DM_MONO_MEDIUM = StyleSheet.create({
  _40: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(40),
  },
  _36: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(36),
  },
  _32: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(32),
  },
  _24: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(24),
  },
  _20: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(20),
  },
  _16: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(16),
  },
  _12: {
    fontFamily: 'DMMono-Medium',
    fontSize: moderateScale(12),
  },
});
