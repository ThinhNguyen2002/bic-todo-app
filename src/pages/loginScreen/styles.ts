import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';
import {ROBOTO_BOLD} from 'constants/fontStyle';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    ...ROBOTO_BOLD._28,
  },
});
