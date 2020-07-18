
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './Heading'
import FilledButton from './FilledButton';
import TextButton from './TextButton';

export default function Registration({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Heading style={{ marginTop: 20, marginBottom: 20 }}> Регистрация  для</Heading>
                <FilledButton style={styles.filledButton} title="ЧсОБ" onPress={() => navigation.navigate('RegistrationFirst')} />
                <FilledButton style={styles.filledButton} title=" Волонтерa" onPress={() => navigation.navigate('RegistrationSecond')} />
                <FilledButton style={styles.filledButton} title="Госслужащего" onPress={() => navigation.navigate('RegistrationThird')} />
            </View>
            <TextButton style={{ marginTop: 30, }} title={'Войти'} onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    filledButton: {
        width: '90%',
        marginVertical: 15,
        padding: 15,
    },
    card: {
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
        paddingRight: 2,


    }
});
