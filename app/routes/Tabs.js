import React, {
    useContext
} from 'react';

import {
    NavigationContainer
} from '@react-navigation/native';

import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import FoodMenuScreen from '../screens/FoodMenuScreen';
import DrinksMenuScreen from '../screens/DrinksMenuScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { OrderItemsContext } from '../context/OrderContext';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const { orderedItems } = useContext(OrderItemsContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        fontSize: 17,
                        fontFamily: 'fugaz-one',
                        color: 'black',
                        marginBottom: 13,
                        // backgroundColor: '#FAF9F6',
                        paddingHorizontal: 0,
                    },
                    tabBarStyle: {
                        backgroundColor: '#FAF9F6',
                        borderTopWidth: 0,
                        marginHorizontal: 0,
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
                <Tab.Screen
                    name={!orderedItems ? 'Orders' : `Orders (${orderedItems.length})`}
                    component={OrdersScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;