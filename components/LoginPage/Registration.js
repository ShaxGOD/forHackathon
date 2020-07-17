
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './Heading'
import FilledButton from './FilledButton';
import TextButton from './TextButton';

export default function Registration({ navigation }) {
    return (
        <View style={styles.container}>
            <Heading> Регистрация </Heading>
            <FilledButton style={styles.filledButton} title="как человек с ограни" onPress={() => { alert('Cool') }} />
            <FilledButton style={styles.filledButton} title="как волонтер" onPress={() => { alert('Cool') }} />
            <FilledButton style={styles.filledButton} title="как госслужащий" onPress={() => { alert('Cool') }} />
            <TextButton title={'Войти'} onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    filledButton: {
        width: '75%',
        marginVertical: 15,
        padding: 10,
    },
});
