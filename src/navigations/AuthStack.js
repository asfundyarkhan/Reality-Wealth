import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../Screens/IntroScreen';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import Skip from '../Screens/SkipScreen';
import Disclosure from '../Screens/Disclosure';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="Skip" component={Skip} />
      <Stack.Screen name="Disclosure" component={Disclosure} />
    </Stack.Navigator>
  );
};

export default AuthStack;
