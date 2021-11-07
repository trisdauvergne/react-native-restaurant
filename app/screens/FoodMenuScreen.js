import React from 'react';
import {
    Button,
    Text,
    SafeAreaView,
    View
} from 'react-native';

import data from '../data/menu.json'

const FoodMenuScreen = () => {
    const menu = data.items[0].entries.items;
    console.log(menu);

    return (
        <SafeAreaView>
            <Text>
                Food glorious food
            </Text>
            <View>
                <Text>
                    {menu.map(dish => 
                        <Text>{dish.description}</Text>)}
                </Text>
            </View>
            <Button title='Order page' />
        </SafeAreaView>
    );
}


export default FoodMenuScreen;