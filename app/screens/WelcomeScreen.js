import React, {
    useContext
} from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Button
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';
import {
    globalStyles
} from '../styles/global';

const WelcomeScreen = ({ navigation }) => {  
    const { clearOrderedItems } = useContext(OrderItemsContext);
    
    const clearItems = () => {
        clearOrderedItems();
    }
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={styles.headingText}>
                NAME
            </Text>
            <Text style={globalStyles.sectionIntroText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet arcu eros. Sed sagittis dapibus dui id dignissim. Maecenas aliquet suscipit erat, vestibulum sodales.
            </Text>
            <Button title='Clear storage' onPress={clearItems} />
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
        fontSize: 100,
        marginTop: 20,
        color: '#FAF9F6',
        textAlign: 'center',
    },
})

export default WelcomeScreen;