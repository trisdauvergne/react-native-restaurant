import React, {
    useState
} from 'react';
import { 
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // console.log(email);
    // console.log(password);

    const handleSubmit = () => {
        console.log('email:', email, 'password:', password)
        setEmail('');
        setPassword('');
        navigation.navigate('Welcome');
    }

    return (
        <View>
            <Text>
                LOGIN
            </Text>
            <Text>
                (Authentication system could be implemented here) 
            </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setEmail}
                placeholder='Enter email (FYI this does nothing RN)'
                defaultValue={email}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={setPassword}
                placeholder='Enter password (FYI this does nothing RN)'
                defaultValue={password}
                secureTextEntry={true}
            />
            <Button
                title='Enter'
                // onPress={() => navigation.navigate('Welcome')}
                onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'blue',
        marginHorizontal: 10,
        marginTop: 10,
    }
})

export default LoginScreen;