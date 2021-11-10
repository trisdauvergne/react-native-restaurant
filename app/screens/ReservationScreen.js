import React, {
    useContext
} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';

import { globalStyles } from '../styles/global';

const ReservationScreen = () => {
    const { orderedItems, clearOrderedItems } = useContext(OrderItemsContext);

    const clearList = () => {
        clearOrderedItems();
    }

    return (
        <SafeAreaView>
            <Text style={globalStyles.screenHeader}>
                YOUR ORDER
            </Text>
            <View>
                {orderedItems != null ? orderedItems.map((item, i) =>
                <Text
                    key={i}
                    style={styles.text}
                >
                    {item.name}
                </Text>)
                :
                <Text
                    style={styles.text}
                >
                    Your list is empty
                </Text>}
            </View>
            <Button
                title='Empty list'
                onPress={clearList}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'lato-bold',
        color: 'white',
    }
})

export default ReservationScreen
