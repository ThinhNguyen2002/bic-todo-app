import {COLORS} from 'constants/colors';
import {MONTSERRAT_SEMI_BOLD, SHADOW_VIEW} from 'constants/fontStyle';
import {SIZE_VALUE} from 'constants/size';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  userContainer: {
    marginTop: SIZE_VALUE._32,
    paddingHorizontal: SIZE_VALUE._12,
  },
  wrapAvatar: {
    flexDirection: 'row',
    paddingHorizontal: SIZE_VALUE._8,
    alignItems: 'center',
    marginBottom: SIZE_VALUE._12,
  },
  avatar: {
    width: SIZE_VALUE._88,
    height: SIZE_VALUE._88,
    borderRadius: SIZE_VALUE._44,
  },
  name: {
    ...MONTSERRAT_SEMI_BOLD._20,
    color: COLORS.mainColor,
    marginLeft: SIZE_VALUE._16,
  },
  wrapData: {
    paddingHorizontal: SIZE_VALUE._16,
    paddingVertical: SIZE_VALUE._12,
    ...SHADOW_VIEW,
    backgroundColor: COLORS.white,
    marginBottom: SIZE_VALUE._30,
    borderRadius: SIZE_VALUE._8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    minHeight: SIZE_VALUE._75,
  },
  screenContainer: {
    minHeight: SIZE_VALUE._200,
    marginHorizontal: SIZE_VALUE._20,
    borderBottomWidth: SIZE_VALUE._1,
    borderTopWidth: SIZE_VALUE._1,
    borderColor: COLORS.border,
  },
  txtScreen: {
    color: COLORS.blue,
    ...MONTSERRAT_SEMI_BOLD._20,
    marginTop: SIZE_VALUE._24,
  },
  helpContainer: {
    paddingHorizontal: SIZE_VALUE._20,
  },
  txtHelp: {
    color: COLORS.blue,
    ...MONTSERRAT_SEMI_BOLD._20,
    marginTop: SIZE_VALUE._24,
  },
  btn: {
    minWidth: 'auto',
  },
});
