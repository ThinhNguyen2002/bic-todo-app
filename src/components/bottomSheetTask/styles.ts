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
  container: {
    flex: 1,
    backgroundColor: COLORS.overlay3,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZE_VALUE._20,
  },
  title: {
    ...MONTSERRAT_BLACK._20,
    color: COLORS.charcoal,
  },
  txtError: {
    color: COLORS.red,
  },
  txtLabel: {
    ...MONTSERRAT_SEMI_BOLD._16,
    color: COLORS.charcoal,
    marginTop: SIZE_VALUE._10,
  },
  inputBox: {
    width: '100%',
  },
  inputViewNote: {
    height: SIZE_VALUE._80,
    paddingVertical: SIZE_VALUE._10,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: SIZE_VALUE._10,
  },
  checkboxIcon: {
    marginRight: SIZE_VALUE._10,
  },
  buttonView: {
    marginTop: SIZE_VALUE._10,
    width: SIZE_VALUE._315,
    height: SIZE_VALUE._46,
    backgroundColor: COLORS.mainColor,
    marginBottom: SIZE_VALUE._16,
  },
  textDesc: {
    ...MONTSERRAT_SEMI_BOLD._16,
    color: COLORS.white,
  },
});
