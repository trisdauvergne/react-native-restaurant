import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import FoodMenuScreen from './app/screens/FoodMenuScreen';
import LoginScreen from './app/screens/LoginScreen.js';
import DrinksMenuScreen from './app/screens/DrinksMenuScreen';
import ReservationScreen from './app/screens/ReservationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
// Login -> Welcome / Intro -> Food Menu / Drinks Menu -> Order page from Food Menu / Intro -> Table booking page
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}  
          />
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}  
          />
          <Stack.Screen
            name='Food'
            component={FoodMenuScreen}
          />
          <Stack.Screen
            name='Drinks'
            component={DrinksMenuScreen}
          />
          <Stack.Screen
            name='Reservations'
            component={ReservationScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
