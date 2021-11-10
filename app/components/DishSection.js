import React, {
    useContext
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import {
    OrderItemsContext
} from '../context/OrderContext';

const DishSection = ({ dish }) => {
    const { addOrderedItem } = useContext(OrderItemsContext);

    const item = {
        name: dish.name,
        quantity: 1,
        price: dish.price
    };

    const handleOrder = () => {
        // console.log('1. in handleOrder', item)
        addOrderedItem(item);
    }

    return (
        <View
            style={styles.dishContainer}
        >
            <View>
            <Text
                style={styles.dishName}
            >
                {dish.name}
            </Text>
            {dish.description !== '' &&
                <Text
                    style={styles.dishCopy}
                >
                    {dish.description}
                </Text>
            }
            <Text
                style={styles.dishCopy}
            >
                {dish.price}
            </Text>
            </View>
            <View>
                <Pressable onPress={handleOrder}>
                    <Text>
                        Add
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    dishContainer: {
        marginBottom: 10,
        backgroundColor: 'rgba(250,249,246,0.6)',
        padding: '3%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    dishName: {
        fontFamily: 'lato-bold',
        fontSize: 17,
        marginBottom: 4,
    },
    dishCopy: {
        fontFamily: 'lato-regular',
        fontSize: 14,
    }
})

export default DishSection
