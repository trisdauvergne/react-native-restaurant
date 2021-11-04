import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                RESTAURANT NAME
            </Text>
            <Text>
                About the restaurant
            </Text>
            <View>
                <Button
                    title='Food Menu'
                    onPress={() => navigation.navigate('Food')}
                />
                <Button
                    title='Drinks Menu'
                    onPress={() => navigation.navigate('Drink')}
                />
                <Button
                    title='Book a Table'
                    onPress={() => navigation.navigate('Reservations')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default WelcomeScreen;