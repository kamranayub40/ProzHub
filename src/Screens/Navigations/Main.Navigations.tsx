import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash_Screen from '../SplashScreen.Screen.tsx/Splash.Screen';
import Login_Screen from '../LoginScreen/Login.Screen';
import Signup_Screen from '../SignUpScreen/SignUp.Screen';
import Tab_Navigation from './Bottom.Tab.Navigations';
import OnBoarding_Screen from '../OnBoardingScreen/OnBoarding.Screen';
import Notification_Screen from '../NotificationScreen/Notification.Screen';
import Settings_Screen from '../SettingScreen/Setting.Screen';
import History_Screen from '../HistoryScreen/History.Screen';

const Main_Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash_Screen">
        <Stack.Screen
          component={Splash_Screen}
          name="Splash_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login_Screen}
          name="Login_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Signup_Screen}
          name="Signup_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Tab_Navigation}
          name="Tab_Navigation"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={History_Screen}
          name="History_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OnBoarding_Screen}
          name="OnBoarding_Screen"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Notification_Screen}
          name="Notification_Screen"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Settings_Screen}
          name="Settings_Screen"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main_Navigation;
