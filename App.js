import React from 'react';
import {
  // StyleSheet,
} from 'react-native';
import { 
  useFonts,
  FugazOne_400Regular 
} from '@expo-google-fonts/fugaz-one';
import { 
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato'
import AppLoading from 'expo-app-loading';

import BackgroundScreen from './app/screens/BackgroundScreen';

import Navigator from './app/routes/HomeStack';

const App = () => {
  let [fontsLoaded] = useFonts({
    'fugaz-one': FugazOne_400Regular,
    'lato-regular': Lato_400Regular,
    'lato-bold': Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <BackgroundScreen>
        <Navigator />
      </BackgroundScreen>
    );
  }
}

export default App;
