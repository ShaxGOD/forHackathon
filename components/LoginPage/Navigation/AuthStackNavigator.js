
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../LoginScreen'
import Registration from '../Registration';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import RegistrationFirst from '../RegistrationFirst';
import RegistrationSecond from '../RegistrationSecond'
import RegistrationThird from '../RegistrationThird'
const AuthStack = createStackNavigator();
export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Registration" component={Registration} />
            <AuthStack.Screen name="RegistrationFirst" component={RegistrationFirst} />
            <AuthStack.Screen name="RegistrationSecond" component={RegistrationSecond} />
            <AuthStack.Screen name="RegistrationThird" component={RegistrationThird} />

        </AuthStack.Navigator>
    );
}