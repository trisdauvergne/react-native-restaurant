import React from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';

const DrinksMenuScreen = () => {
    return (
        <SafeAreaView>
            <Text style={globalStyles.screenHeader}>
                DRINKS @ NAME
            </Text>
        </SafeAreaView>
    )
}

export default DrinksMenuScreen;