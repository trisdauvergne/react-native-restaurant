import React from 'react';

import {
    NavigationContainer
} from '@react-navigation/native';

import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import FoodMenuScreen from '../screens/FoodMenuScreen';
import DrinksMenuScreen from '../screens/DrinksMenuScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer
            
        >
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Welcome'
            >
                <Tab.Screen name='Welcome' component={WelcomeScreen} />
                <Tab.Screen name='Food' component={FoodMenuScreen} />
                <Tab.Screen name='Drink' component={DrinksMenuScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;