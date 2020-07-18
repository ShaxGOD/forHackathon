
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './Heading'
import Input from './Input';
import FilledButton from './FilledButton';
import LoginWithAccount from './LoginWithAccount';
import TextButton from './TextButton';
export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.mainLogin}>
                <Heading> Войти </Heading>
                <Input style={styles.input} placeholder={'номер телефона'} keyboardType='numeric' />
                <Input style={styles.input} secureTextEntry placeholder={'пароль'} />
                <FilledButton title="ВОЙТИ" onPress={() => navigation.navigate('AppTabs')} />
                <View style={{ height: '25%' }}>
                    <LoginWithAccount />
                </View>
            </View>


            <TextButton title={'Регистрация'} onPress={() => navigation.navigate('Registration')} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    input: {
        marginVertical: '4%',
        padding: 14,
        width: '85%',
        borderRadius: 25,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    mainLogin: {
        backgroundColor: 'white',
        width: '90%',
        alignItems: 'center',
        height: 'auto',
        marginTop: '20%',
        borderRadius: 25,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        paddingLeft: 2,
        paddingRight: 2
    }
});
