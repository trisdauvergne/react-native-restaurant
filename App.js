import React from 'react';
import {
  // StyleSheet,
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import FoodMenuScreen from './app/screens/FoodMenuScreen';
import LoginScreen from './app/screens/LoginScreen.js';
import DrinksMenuScreen from './app/screens/DrinksMenuScreen';
import ReservationScreen from './app/screens/ReservationScreen';
import BackgroundScreen from './app/screens/BackgroundScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Food'
          component={FoodMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Drinks'
          component={DrinksMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Reservations'
          component={ReservationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    <BackgroundScreen>
      <WelcomeScreen />
      {/* <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
              <Stack.Screen
                name='Login'
                component={LoginScreen}  
              />
              <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Food'
                component={FoodMenuScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Drinks'
                component={DrinksMenuScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Reservations'
                component={ReservationScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
        </NavigationContainer> */}
    </BackgroundScreen>
    </NavigationContainer>
  );
}

export default App;
