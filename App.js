import React, {
  // useEffect,
  // useContext
} from 'react';
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
import {
  // OrderItemsContext,
  OrderItemsProvider
} from './app/context/OrderContext';
import BackgroundScreen from './app/screens/BackgroundScreen';
import Tabs from './app/routes/Tabs';

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
      <OrderItemsProvider>
        <BackgroundScreen>
          <Tabs />
        </BackgroundScreen>
      </OrderItemsProvider>
    );
  }
}

export default App;
