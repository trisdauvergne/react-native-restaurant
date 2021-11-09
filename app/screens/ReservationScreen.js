import React from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';

const ReservationScreen = () => {
    return (
        <SafeAreaView>
            <Text style={globalStyles.screenHeader}>
                RESERVATIONS (to come)
            </Text>
        </SafeAreaView>
    )
}

export default ReservationScreen
