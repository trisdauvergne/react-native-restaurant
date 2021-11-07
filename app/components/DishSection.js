import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const DishSection = ({ dish }) => {
    return (
        <View
            style={styles.dishContainer}
        >
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
    )
};

const styles = StyleSheet.create({
    dishContainer: {
        marginBottom: 10,
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
