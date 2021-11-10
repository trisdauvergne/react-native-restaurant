import React, {
    useContext
} from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';

import { globalStyles } from '../styles/global';

const ReservationScreen = () => {
    const { orderedItems } = useContext(OrderItemsContext);

    console.log('in reservation screen', orderedItems);

    return (
        <SafeAreaView>
            <Text style={globalStyles.screenHeader}>
                RESERVATIONS (to come)
            </Text>
        </SafeAreaView>
    )
}

export default ReservationScreen
