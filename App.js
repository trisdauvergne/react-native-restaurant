import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// import {
//   NavigationContainer
// } from '@react-navigation/native';
// import {
//   createNativeStackNavigator
// } from '@react-navigation/native-stack';

import BackgroundScreen from './app/screens/BackgroundScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import FoodMenuScreen from './app/screens/FoodMenuScreen';

import Navigator from './app/routes/HomeStack';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BackgroundScreen>
      <Navigator style={styles.navigator}/>
      {/* <WelcomeScreen /> */}
      {/* <NavigationContainer style={styles.navigator}>
        <Stack.Navigator>
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Food'
            component={FoodMenuScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  navigator: {
    color: 'red'
  }
})

export default App;
