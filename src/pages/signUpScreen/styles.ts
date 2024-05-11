import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';
import {MONTSERRAT_BOLD, MONTSERRAT_SEMI_BOLD} from 'constants/fontStyle';
import {SIZE_VALUE} from 'constants/size';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingHorizontal: SIZE_VALUE._25,
    paddingTop: SIZE_VALUE._70,
  },
  title: {
    ...MONTSERRAT_BOLD._20,
    color: COLORS.black,
    marginTop: SIZE_VALUE._25,
    marginBottom: SIZE_VALUE._10,
  },
  logo: {
    width: SIZE_VALUE._70,
    height: SIZE_VALUE._70,
    alignSelf: 'center',
    borderRadius: SIZE_VALUE._10,
    marginTop: SIZE_VALUE._40,
  },
  txtError: {
    color: COLORS.red,
  },
  txtLabel: {
    ...MONTSERRAT_SEMI_BOLD._16,
    color: COLORS.charcoal,
    marginTop: SIZE_VALUE._10,
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
  textBox: {
    alignSelf: 'center',
    marginBottom: SIZE_VALUE._40,
  },
  privacyPolicy: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZE_VALUE._40,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZE_VALUE._40,
  },
  checkboxIcon: {
    marginRight: SIZE_VALUE._10,
  },
  validatePasswordContainer: {
    marginTop: SIZE_VALUE._10,
  },
  validateItem: {
    flexDirection: 'row',
    opacity: 0.4,
    marginTop: SIZE_VALUE._5,
  },
  validateItemActive: {
    opacity: 1,
  },
  validateText: {
    marginLeft: SIZE_VALUE._5,
  },
});
