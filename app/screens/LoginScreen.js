import React from 'react';
import { 
    Button,
    Text,
    View
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                LOGIN
            </Text>
            <Text>
                (Authentication system can be implemented here) 
            </Text>
            <Button
                title='Enter'
                onPress={() => navigation.navigate('Welcome')}
            />
        </View>
    );
}

export default LoginScreen;