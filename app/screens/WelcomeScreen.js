import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { 
    useFonts,
    FugazOne_400Regular 
} from '@expo-google-fonts/fugaz-one';
import AppLoading from 'expo-app-loading';

import BackgroundScreen from './BackgroundScreen';

const WelcomeScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        FugazOne_400Regular
    })

    if(!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <SafeAreaView
                style={styles.container}
            >
                <Text style={styles.heading}>
                    RESTAURANT
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet arcu eros. Sed sagittis dapibus dui id dignissim. Maecenas aliquet suscipit erat, vestibulum sodales.
                </Text>
                <View style={styles.btnContainer}>
                    <Button
                        title='Food Menu'
                        onPress={() => navigation.navigate('Food')}
                    />
                    <Button
                        title='Drinks Menu'
                        onPress={() => navigation.navigate('Drinks')}
                    />
                    <Button
                        title='Book a Table'
                        onPress={() => navigation.navigate('Reservations')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    // background: {
    //   flex: 1,
    // //   justifyContent: 'center'
    // },
    btnContainer: {
        alignSelf: 'flex-end',
    },
    container: {
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'FugazOne_400Regular',
        fontSize: 50,
        color: '#FAF9F6',
    },
})

export default WelcomeScreen;