import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';
import {
  MONTSERRAT_BLACK,
  MONTSERRAT_BOLD,
  MONTSERRAT_MEDIUM,
  MONTSERRAT_SEMI_BOLD,
} from 'constants/fontStyle';
import {SIZE_VALUE} from 'constants/size';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingHorizontal: SIZE_VALUE._15,
    paddingTop: SIZE_VALUE._20,
    paddingBottom: SIZE_VALUE._130,
  },
  header: {
    flexDirection: 'row',
    marginBottom: SIZE_VALUE._40,
    alignItems: 'center',
  },
  logo: {
    width: SIZE_VALUE._40,
    height: SIZE_VALUE._40,
    borderRadius: SIZE_VALUE._10,
  },
  appName: {
    ...MONTSERRAT_BLACK._24,
    color: COLORS.mainColor,
    marginLeft: SIZE_VALUE._10,
    flex: 1,
  },
  wrapTextTitle: {
    backgroundColor: COLORS.lavenderMist,
    borderColor: COLORS.mainColor,
    borderWidth: SIZE_VALUE._1,
    width: SIZE_VALUE._130,
    justifyContent: 'center',
    borderRadius: SIZE_VALUE._5,
    alignItems: 'center',
    marginVertical: SIZE_VALUE._10,
    paddingVertical: SIZE_VALUE._5,
  },
  title: {
    ...MONTSERRAT_BOLD._16,
    color: COLORS.mainColor,
  },
  item: {
    padding: SIZE_VALUE._15,
    marginBottom: SIZE_VALUE._5,
    borderRadius: SIZE_VALUE._5,
    borderWidth: SIZE_VALUE._1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.mediumPurple,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapTextItem: {
    marginLeft: SIZE_VALUE._15,
    flex: 1,
  },
  textItem: {
    ...MONTSERRAT_MEDIUM._16,
    color: COLORS.white,
  },
  textItemNote: {
    ...MONTSERRAT_MEDIUM._14,
    color: COLORS.white40,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  addIcon: {
    backgroundColor: COLORS.mainColor,
    position: 'absolute',
    right: SIZE_VALUE._15,
    bottom: SIZE_VALUE._100,
    borderRadius: SIZE_VALUE._42,
    padding: SIZE_VALUE._10,
    borderWidth: SIZE_VALUE._1,
    borderColor: COLORS.border,
  },
});
