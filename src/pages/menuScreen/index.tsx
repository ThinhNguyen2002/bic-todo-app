import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, View, Pressable as PressBtn} from 'react-native';

import {styles} from './style';
import TextTranslation from 'components/textTranslation';
import {useCredentialHandler} from 'customHooks/useCredentialHandler';
import {useLoadingToggle} from 'customHooks/useLoadingToggle';
import {LOGO} from 'constants/image';
import {UserCredential} from 'customHooks/useCredentialHandler/type';

const MenuScreen: React.FunctionComponent = ({}) => {
  const {setLogout, getUserCredential} = useCredentialHandler();
  const {showLoadingWithIcon} = useLoadingToggle(true);
  const [dataUser, setDataUser] = useState<UserCredential>();

  useEffect(() => {
    const handleGetUserData = async () => {
      showLoadingWithIcon(true);
      const dataRes = await getUserCredential();

      if (dataRes) {
        setDataUser(dataRes);
      }
      showLoadingWithIcon(false);
    };

    handleGetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogOut = useCallback(() => {
    setLogout();
  }, [setLogout]);

  const elements = useMemo((): Array<{
    name: string;
  }> => {
    return [
      {
        name: 'profileScreen.account',
      },
      {
        name: 'profileScreen.biicGroup',
      },
      {
        name: 'profileScreen.biicChat',
      },
    ];
  }, []);

  return (
    <View>
      <View style={styles.userContainer}>
        <View style={styles.wrapAvatar}>
          <Image source={LOGO} style={styles.avatar} />
          <TextTranslation
            ignoreTranslate
            text={dataUser?.fullName || 'User'}
            style={styles.name}
          />
        </View>
      </View>
      <View style={styles.screenContainer}>
        {elements.map(item => {
          return (
            <PressBtn key={item.name}>
              <TextTranslation text={item.name} style={styles.txtScreen} />
            </PressBtn>
          );
        })}
      </View>
      <View style={styles.helpContainer}>
        <TextTranslation text="profileScreen.help" style={styles.txtHelp} />
        <PressBtn onPress={handleLogOut} style={styles.btn}>
          <TextTranslation text="profileScreen.logout" style={styles.txtHelp} />
        </PressBtn>
      </View>
    </View>
  );
};

export default MenuScreen;
