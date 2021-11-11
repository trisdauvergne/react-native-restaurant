import React, {
    useContext
} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';
import OrderedItemSection from '../components/OrderedItemSection';

import { globalStyles } from '../styles/global';

const OrdersScreen = () => {
    const { orderedItems, clearOrderedItems } = useContext(OrderItemsContext);

    const clearList = () => {
        clearOrderedItems();
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={globalStyles.screenHeader}>
                YOUR ORDER
            </Text>
            <View>
                {!orderedItems && 
                <Text
                    style={styles.totalTxt}
                >
                    Your list is empty
                </Text>}
                {orderedItems && orderedItems.map((item, i) => <OrderedItemSection item={item} key={i}/>)}
            </View>
            {orderedItems && <Text
                style={styles.totalTxt}
            >
                Total = $
            </Text>}
            {orderedItems && <Pressable
                style={{...globalStyles.btn, marginTop: 10}}
                onPress={clearList}
            >
                <Text
                    style={globalStyles.btnText}
                >
                    Clear list
                </Text>
            </Pressable>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalTxt: {
        color: '#FAF9F6',
        fontFamily: 'lato-bold',
        fontSize: 25,
    },
})

export default OrdersScreen;
