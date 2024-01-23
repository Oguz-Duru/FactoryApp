import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import Login from './Login';

export default Register = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const LoginNavigate = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.text}>Hello! Register to get started</Text>
                <View style={styles.form}>
                    <TextInput placeholder='Name' style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}>
                    </TextInput>
                    <TextInput placeholder='Email or phone' style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    ></TextInput>
                    <TextInput placeholder='Password' style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}></TextInput>
                    <TextInput placeholder='Password again' style={styles.input}
                        value={passwordAgain}
                        onChangeText={(text) => setPasswordAgain(text)}></TextInput>
                    <Button onPress={LoginNavigate} buttonText={'Register'} />
                </View>
                <Text style={{ marginTop: 40 }}>Or Register with</Text>
                <View style={styles.row}>
                    <Image style={styles.registerİmage} source={require('../assets/facelogo.png')}></Image>
                    <Image style={styles.registerİmage} source={require('../assets/googlelogo.png')}></Image>
                    <Image style={styles.registerİmage} source={require('../assets/applelogo.png')}></Image>
                </View>
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Don't have an account? Register Now</Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        width: '90%',
        fontWeight: '500',
        fontSize: 30,
    },

    formContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    form: {
        width: '90%',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        padding: 10,
        marginTop: 20,
        margin: 'auto',
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        borderColor: '#a9a9a9',
        borderWidth: 1,
    },
    registerİmage: {
        width: 40,
        height: 40,
    },
    row: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row'
    },
    bottomTextContainer: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 20, // İstediğiniz boşluk miktarına göre ayarlayabilirsiniz
        width: '100%',
        alignItems: 'center',
    },
});
