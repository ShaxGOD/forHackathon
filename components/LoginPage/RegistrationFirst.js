
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Heading from './Heading'
import Input from './Input'
import DatePicker from './DatePicker'
import MainPicker from './MainPicker'
import { Entypo } from '@expo/vector-icons';
import SecondPicker from './SecondPicker';
import FilledButton from './FilledButton';
export default function RegistrationFirst({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <Heading style={{ marginTop: -10, marginBottom: 13 }}> Регистрация </Heading>
                    <Input style={styles.input} placeholder={'Фамилия'} />
                    <Input style={styles.input} placeholder={'Имя'} />
                    <Input style={styles.input} placeholder={'Номер телефона'} keyboardType='numeric' />
                    <DatePicker />
                    <Input style={styles.input} secureTextEntry placeholder={'Пароль'} />
                    <Input style={styles.input} secureTextEntry placeholder={'Подтвердите пароль'} />
                    <MainPicker />
                    <SecondPicker />
                    <FilledButton style={{ width: '60%', marginBottom: 30 }} title="Регистрация" onPress={() => navigation.navigate('AppTabs')} />
                </View>
            </ScrollView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7fa',
        paddingLeft: '3.5%',
        paddingRight: '3.5%',
    },
    filledButton: {
        width: '90%',
        marginVertical: 15,
        padding: 15,
    },
    card: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        backgroundColor: 'white',
        marginRight: 6,
        marginLeft: 6,
        marginBottom: 15
    },
    input: {
        marginVertical: '3%',
        padding: 12,
        width: '95%',
        borderRadius: 25,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 16,
        backgroundColor: 'white'
    },

});
