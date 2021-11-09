import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import { globalStyles } from '../styles/global';

const WelcomeScreen = ({ navigation }) => {    
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={styles.headingText}>
                name
            </Text>
            <Text style={globalStyles.sectionIntroText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet arcu eros. Sed sagittis dapibus dui id dignissim. Maecenas aliquet suscipit erat, vestibulum sodales.
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '10%',
    },
    headingText: {
        fontFamily: 'fugaz-one',
        fontSize: 120,
        marginTop: 20,
        color: '#FAF9F6',
        textAlign: 'center',
    },
})

export default WelcomeScreen;