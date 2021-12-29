import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/Register';

export const appStackNavigator = createStackNavigator(
  {
    MainStackNavigator: {
      screen: MainStackNavigator,
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'LoginScreen',
    mode: 'card',
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(appStackNavigator);
