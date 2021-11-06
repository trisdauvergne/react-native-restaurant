import {
    createStackNavigator
} from "react-navigation-stack";
import {
    createAppContainer
} from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import FoodMenuScreen from "../screens/FoodMenuScreen";
import DrinksMenuScreen from '../screens/DrinksMenuScreen';
import ReservationScreen from '../screens/ReservationScreen';

const HomeStack = createStackNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Food: { screen: FoodMenuScreen },
        Drinks: { screen: DrinksMenuScreen },
        Reservation: { screen: ReservationScreen }
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
        defaultNavigationOptions: {
            cardStyle: { backgroundColor: 'transparent' }
        }
    }
);

export default createAppContainer(HomeStack);