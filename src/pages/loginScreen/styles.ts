import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';
import {
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
    flex: 1,
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
  },
  txtError: {
    color: COLORS.red,
  },
  txtLabel: {
    ...MONTSERRAT_SEMI_BOLD._16,
    color: COLORS.charcoal,
    marginTop: SIZE_VALUE._10,
  },
  forgotPassword: {
    ...MONTSERRAT_MEDIUM._14,
    color: COLORS.blue,
    marginTop: SIZE_VALUE._20,
  },
  buttonView: {
    marginTop: SIZE_VALUE._30,
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
  },
  privacyPolicy: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZE_VALUE._40,
  },
});
