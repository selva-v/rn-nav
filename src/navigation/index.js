import 'react-native-gesture-handler';
import * as React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Switch = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'Auth',
  }
);

export default Switch;