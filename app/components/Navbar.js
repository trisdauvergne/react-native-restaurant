import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';

const Navbar = ({ navigation }) => {
    console.log('navigation:', navigation);
    
    return (
        <View>
            <Pressable
                    onPress={() => navigation.navigate('Food')}
                    style={globalStyles.btn}
                >
                    <Text
                        style={globalStyles.btnText}
                    >
                        Food
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Drinks')}
                    style={globalStyles.btn}
                >
                    <Text
                        style={globalStyles.btnText}
                    >
                        Drinks
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Reservations')}
                    style={globalStyles.btn}
                    >
                    <Text
                        style={globalStyles.btnText}
                    >
                        Bookings
                    </Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        fontSize: 40,
        color: 'white'
    }
})

export default Navbar;