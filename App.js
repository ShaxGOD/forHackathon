
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './components/LoginPage/Navigation/AuthStackNavigator'
import 'react-native-gesture-handler'
const RootStack = createStackNavigator();
import AppTabs from './components/MainContent/AppTabs'
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        <RootStack.Screen name={'AppTabs'} component={AppTabs} />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}