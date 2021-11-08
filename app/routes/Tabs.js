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
import ReservationScreen from '../screens/ReservationScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        fontSize: 20,
                        fontFamily: 'fugaz-one',
                        color: 'black',
                        marginBottom: 10,
                        // backgroundColor: '#FAF9F6',
                        paddingHorizontal: 5,
                    },
                    tabBarStyle: {
                        backgroundColor: '#FAF9F6',
                        borderTopWidth: 0,
                        marginHorizontal: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    },
                    tabBarIconStyle: {
                        display: 'none'
                    }
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Welcome'
            >
                <Tab.Screen
                    name='Home'
                    component={WelcomeScreen}
                />
                <Tab.Screen name='Food' component={FoodMenuScreen} />
                <Tab.Screen name='Drink' component={DrinksMenuScreen} />
                <Tab.Screen name='Booking' component={ReservationScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;