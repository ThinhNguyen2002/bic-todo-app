import {View, Pressable as PressBtn, LayoutChangeEvent} from 'react-native';
import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import TextTranslation from 'components/textTranslation';
import {CustomTabBarProps} from './type';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';
import {themeStyles} from 'themes';
import {
  HomeBottomTabIcon,
  ImportanceBottomTabIcon,
  MenuBottomTabIcon,
  NotificationBottomTabIcon,
} from 'components/svg/bottomTab';

const icons = {
  HomeScreen: HomeBottomTabIcon,
  ImportanceScreen: ImportanceBottomTabIcon,
  NotificationScreen: NotificationBottomTabIcon,
  MenuScreen: MenuBottomTabIcon,
};

const CustomTabBarComponent: FunctionComponent<
  BottomTabBarProps & CustomTabBarProps
> = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();

  const [heightBottom, setHeightBottom] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setHeightBottom(height);
  };

  const handleTabPress = useCallback(
    (index: number) => {
      const {key, name} = state.routes[index];
      const isFocused = state.index === index;

      if (!isFocused) {
        navigation.navigate(name);
      }
    },
    [navigation, state.index, state.routes],
  );

  const renderIcon = useMemo(() => {
    return state.routes.map((route, index) => {
      const IconComponent = icons[route.name as keyof typeof icons];
      const isFocused = state.index === index;

      return (
        <PressBtn
          key={index}
          style={styles.wrapIcon}
          onPress={() => handleTabPress(index)}>
          <IconComponent isBorder={isFocused} />
          <TextTranslation
            text={`bottomTab.${route.name}`}
            style={[
              themeStyles.primaryText.textNormal,
              isFocused && styles.textActive,
            ]}
          />
        </PressBtn>
      );
    });
  }, [handleTabPress, state.index, state.routes]);

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <View
        style={[
          styles.borderBottom,
          {height: heightBottom - bottom + SIZE_VALUE._1},
        ]}
      />
      <View
        onLayout={onLayout}
        style={[
          styles.containerContent,
          styles.container,
          {backgroundColor: COLORS.white},
          {paddingBottom: bottom},
        ]}>
        {renderIcon}
      </View>
    </View>
  );
};

export default CustomTabBarComponent;
