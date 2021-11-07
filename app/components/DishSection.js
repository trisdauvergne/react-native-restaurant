import React from 'react'
import {
    View,
    Text,
} from 'react-native'

const DishSection = ({ dish }) => {
    return (
        <View>
            <Text>
                {dish.name}
            </Text>
            {dish.description !== '' &&
                <Text>
                    {dish.description}
                </Text>
            }
            <Text>
                {dish.price}
            </Text>
        </View>
    )
};

export default DishSection
