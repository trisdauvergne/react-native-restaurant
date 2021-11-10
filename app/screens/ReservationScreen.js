import React, {
    useContext
} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';

import { globalStyles } from '../styles/global';

const ReservationScreen = () => {
    const { orderedItems, clearOrderedItems } = useContext(OrderItemsContext);

    console.log('in reservation screen', orderedItems.map(item => item.name));

    const clearList = () => {
        clearOrderedItems();
    }

    return (
        <SafeAreaView>
            <Text style={globalStyles.screenHeader}>
                YOUR ORDER
            </Text>
            <View>
                {orderedItems ? orderedItems.map((item, i) => <Text key={i}>{item.name}</Text>) : <Text>Your list is empty</Text>}
            </View>
            <Button
                title='Empty list'
                onPress={clearList}
            />
        </SafeAreaView>
    )
}

export default ReservationScreen
