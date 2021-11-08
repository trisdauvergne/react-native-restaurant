import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Pressable,
    Text,
    StyleSheet,
    View
} from 'react-native';

import MenuSection from '../components/MenuSection'

import { globalStyles } from '../styles/global';
import data from '../data/menu.json'

const FoodMenuScreen = ({ navigation }) => {
    const menu = data.items[0].entries.items;

    return (
        <SafeAreaView>
            <Text>
                Food menu
            </Text>
            <ScrollView>
                {menu.map((section, i) => <MenuSection section={section} key={i} />)}
            </ScrollView> 
            {/* <Button title='Order page' /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backBtn: {
        color: '#FAF9F6'
    }
})
export default FoodMenuScreen;