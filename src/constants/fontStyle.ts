import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../helpers/responsive';

export const SHADOW_STYLES = Platform.select({
  ios: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  android: {
    elevation: 5,
  },
});

export const SHADOW_STYLES_BOTTOM = Platform.select({
  ios: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  android: {
    elevation: 12,
  },
});

export const ROBOTO_BOLD = StyleSheet.create({
  _32: {
    fontSize: moderateScale(32),
    fontFamily: 'Roboto-Bold',
  },
  _28: {
    fontSize: moderateScale(28),
    fontFamily: 'Roboto-Bold',
  },
});

export const ROBOTO_MEDIUM = StyleSheet.create({
  _18: {
    fontSize: moderateScale(18),
    fontFamily: 'Roboto-Medium',
  },
  _17: {
    fontSize: moderateScale(17),
    fontFamily: 'Roboto-Medium',
  },
});

export const ROBOTO_REGULAR = StyleSheet.create({
  _28: {
    fontSize: moderateScale(28),
    fontFamily: 'Roboto-Regular',
  },
  _17: {
    fontSize: moderateScale(17),
    fontFamily: 'Roboto-Regular',
  },
});

export const OPENSANS_BOLD = StyleSheet.create({
  _14: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Bold',
  },
  _11: {
    fontSize: moderateScale(11),
    fontFamily: 'OpenSans-Bold',
  },
});

export const OPENSANS_SEMIBOLD = StyleSheet.create({
  _14: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-SemiBold',
  },
  _12: {
    fontSize: moderateScale(12),
    fontFamily: 'OpenSans-SemiBold',
  },
});

export const OPENSANS_REGULAR = StyleSheet.create({
  _17: {
    fontSize: moderateScale(17),
    fontFamily: 'OpenSans-Regular',
  },
  _14: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Regular',
  },
});
