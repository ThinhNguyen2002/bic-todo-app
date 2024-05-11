import {StyleSheet} from 'react-native';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

const defaultInputStyle = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    borderBottomWidth: SIZE_VALUE._1,
    borderColor: COLORS.white,
    height: SIZE_VALUE._32,
    lineHeight: SIZE_VALUE._32,
    marginBottom: SIZE_VALUE._8,
  },
  defaultInputStyle: {
    flex: 1,
    color: COLORS.white,
    margin: 0,
    padding: 0,
  },
  errorView: {
    paddingHorizontal: SIZE_VALUE._5,
    paddingTop: SIZE_VALUE._5,
  },
  iconHead: {
    justifyContent: 'center',
    marginRight: SIZE_VALUE._12,
  },
  icon: {
    justifyContent: 'center',
  },
  requiredLabel: {
    position: 'absolute',
    right: 0,
    top: SIZE_VALUE._16,
    color: COLORS.white,
  },
});

export default defaultInputStyle;
