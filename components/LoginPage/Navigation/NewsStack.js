import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../../MainContent/News';
import NewsDetails from '../../MainContent/NewsDetails';

const Stack = createStackNavigator();

export default function NewsStack() {
    return (
        <Stack.Navigator initialRouteName="News">
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetails}
                options={{
                    headerTitle: 'Описание новости',
                    headerBackTitle: 'Назад'
                }} />
        </Stack.Navigator>
    )

}