import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import Home from './Home';

export default Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const HomeNavigate = () => {
        if (username === '' || password === '') {
            alert('hata')
        }
        else {
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Image source={require('../assets/background.jpg')} style={styles.backgroundImage}></Image>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.form}>
                    <TextInput placeholder='Email or phone' style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    ></TextInput>
                    <TextInput placeholder='Password' style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}></TextInput>
                    <Button onPress={HomeNavigate} buttonText={'Giriş Yap'} />
                </View>
            </View>
        </SafeAreaView >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 250
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: '80%',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        padding: 4,
        marginTop: 20,
        margin: 'auto',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white'
    }
}); 