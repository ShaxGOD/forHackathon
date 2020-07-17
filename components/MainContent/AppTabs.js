import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native'
import Files from './Files'
import MainCard from './MainCard'
import Profile from './Profile'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name === 'Files') {
                        return <FontAwesome5 name="folder" size={45} color={color} />;

                    } else if (route.name === 'MainCard') {

                        return <FontAwesome5 name="compass" size={45} color={color} />;
                    }
                    else if (route.name === 'Profile') {
                        return <MaterialCommunityIcons name="account-circle-outline" size={45} color={color} />;
                    }

                },

            })}
            tabBarOptions={{
                activeTintColor: '#2979FF',
                inactiveTintColor: '#000000',
                labelStyle: {
                    fontSize: 0,
                },
                style: {
                    backgroundColor: 'white',
                    height: '8%',
                    borderTopRightRadius: 35,
                    borderTopLeftRadius: 35,
                    elevation: 5,
                    borderTopWidth: 3,
                    top: 1
                },

            }}

        >
            <Tab.Screen name="Files" component={Files} />
            <Tab.Screen name="MainCard" component={MainCard} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );


}