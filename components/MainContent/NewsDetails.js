import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function NewsDetails({ route, navigation }) {
    const { title } = route.params;
    const { text } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                    <Image style={styles.newsPhoto} source={require('../../assets/logo.png')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7fa',
        paddingLeft: '3.5%',
        paddingRight: '3.5%',
    },

    main: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 15,
        alignItems: "center"
    },
    title: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 20,
        color: "#484848",
    },
    text: {
        fontSize: 15,
        color: "#484848",
        opacity: 0.8,
        lineHeight: 20,
        marginTop: 20,
    },
    newsPhoto: {
        width: '90%',
        borderRadius: 10,
        height: 235,
        marginTop: 15
    },
    sailetText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#484848'
    },
    sailetInline: {
        color: '#2979FF'
    },
})