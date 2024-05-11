import {COLORS} from 'constants/colors';
import {MONTSERRAT_MEDIUM} from 'constants/fontStyle';
import {SIZE_VALUE} from 'constants/size';

export const themeStyles = {
  // This is the default style for input
  primaryInput: {
    inputStyle: {
      ...MONTSERRAT_MEDIUM._14,
      color: COLORS.black,
    },
    inputRequiredView: {
      borderWidth: SIZE_VALUE._1,
      borderRadius: SIZE_VALUE._5,
      borderColor: COLORS.border,
      height: SIZE_VALUE._42,
      paddingHorizontal: SIZE_VALUE._16,
      marginTop: SIZE_VALUE._8,
      backgroundColor: COLORS.transparent,
    },
  },
  primaryText: {
    textNormal: {
      ...MONTSERRAT_MEDIUM._14,
      color: COLORS.charcoal,
    },
    textHighlight: {
      ...MONTSERRAT_MEDIUM._14,
      color: COLORS.blue,
    },
  },
};
