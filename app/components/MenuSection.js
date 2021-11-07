import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const MenuSection = ({ section }) => {
    // console.log('SECTION', section);
    return (
        <View>
            <Text style={styles.sectionHeading}>
                {section.name}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    sectionHeading: {
        fontFamily: 'fugaz-one',
        color: '#FAF9F6',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default MenuSection
