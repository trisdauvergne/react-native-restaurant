import React from 'react'
import {
    ImageBackground,
    StyleSheet
 } from 'react-native';

const BackgroundScreen = ({ children }) => {
    return (
            <ImageBackground
                source={require('../assets/chinesefood.jpg')}
                style={styles.background}
            >
                {children}
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
      },
})

export default BackgroundScreen
