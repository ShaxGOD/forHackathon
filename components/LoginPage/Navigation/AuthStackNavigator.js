
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../LoginScreen'
import Registration from '../Registration';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler'
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
        </AuthStack.Navigator>
    );
}