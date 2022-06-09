import React from 'react';
import {CommonActions} from '@react-navigation/native';
import RNSplashScreen from 'react-native-splash-screen';
import {StatusBar, View, Image, Text} from 'react-native';

import {SCREEN_STACK_ENUM} from '@enum';
import {solNFTLogo} from '@constants/images';

import {splashScreenStyles} from './style';

export const SplashScreen: React.FC<{navigation: any}> = ({navigation}) => {
  React.useLayoutEffect(() => {
    RNSplashScreen.hide();

    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: SCREEN_STACK_ENUM.BUTTOMTABS}],
        }),
      );
    }, 4000);
  }, [navigation]);

  return (
    <View style={splashScreenStyles.container}>
      <StatusBar hidden />
      <View style={splashScreenStyles.logoContainer}>
        <Image source={solNFTLogo} style={splashScreenStyles.logo} />
      </View>

      <Text style={splashScreenStyles.textStyle}>Powered by holaplex</Text>
    </View>
  );
};
