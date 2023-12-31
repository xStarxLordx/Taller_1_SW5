import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';


import SignInScreen from '../screens/SignInScreen/';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Home from '../screens/Home';
import RegistroHoras from '../screens/RegistroHoras';
import Novedades from '../screens/Novedades';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="RegistroHoras" component={RegistroHoras} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Novedades" component={Novedades} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation