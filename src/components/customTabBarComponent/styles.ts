import {StyleSheet} from 'react-native';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';
import {
  MONTSERRAT_BLACK,
  MONTSERRAT_BOLD,
  MONTSERRAT_MEDIUM,
} from 'constants/fontStyle';

export const styles = StyleSheet.create({
  containerLinear: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: SIZE_VALUE._15,
    borderTopLeftRadius: SIZE_VALUE._15,
    borderTopRightRadius: SIZE_VALUE._15,
    paddingHorizontal: SIZE_VALUE._17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: SIZE_VALUE._15,
    borderTopLeftRadius: SIZE_VALUE._15,
    borderTopRightRadius: SIZE_VALUE._15,
    paddingHorizontal: SIZE_VALUE._17,
  },
  borderBottom: {
    borderTopLeftRadius: SIZE_VALUE._15,
    borderTopRightRadius: SIZE_VALUE._15,
    borderTopWidth: SIZE_VALUE._1,
    borderRightWidth: SIZE_VALUE._1,
    borderLeftWidth: SIZE_VALUE._1,
    borderColor: COLORS.mainColor,
  },
  wrapIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...MONTSERRAT_BOLD._20,
    color: COLORS.white,
  },
  textActive: {
    color: COLORS.mainColor,
  },
  textIcon: {
    ...MONTSERRAT_MEDIUM._14,
    color: COLORS.white,
  },
  tabBarBadge: {
    minWidth: SIZE_VALUE._16,
    minHeight: SIZE_VALUE._16,
    padding: SIZE_VALUE._2,
    borderRadius: SIZE_VALUE._20,
    backgroundColor: COLORS.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -SIZE_VALUE._12,
    right: SIZE_VALUE._10,
    borderWidth: SIZE_VALUE._1,
    borderColor: COLORS.red,
  },
  tabBarBadgeText: {
    color: COLORS.white,
    ...MONTSERRAT_BLACK._12,
  },
});
