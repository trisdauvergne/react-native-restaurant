import React, {
    useState
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native'
import DishSection from './DishSection';

const MenuSection = ({ section }) => {
    // console.log('SECTION ITEMS', section.entries.items);
    const [ sectionVisible, setSectionVisible ] = useState(false);

    return (
        <View>
            <Pressable
                onPress={() => setSectionVisible(!sectionVisible)}
            >
                <Text style={styles.sectionHeading}>
                    {section.name}
                </Text>
            </Pressable>
            {sectionVisible && 
                <View
                    style={styles.dishBackground}
                >
                    {section.entries.items.map((dish, i) => <DishSection dish={dish} key={i} />)}
                </View>    
            }
        </View>
    )
};

const styles = StyleSheet.create({
    sectionHeading: {
        fontFamily: 'fugaz-one',
        color: '#FAF9F6',
        fontSize: 25,
        textAlign: 'center'
    },
    dishBackground: {
        backgroundColor: '#FAF9F6',
        marginHorizontal: '10%',
        padding: '5%',
        opacity: 0.6
    },
})

export default MenuSection
