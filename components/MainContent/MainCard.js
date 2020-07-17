import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function MainCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>MainCard.js</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    mainText: {
        marginTop: '50%',
        fontSize: 20,
        fontWeight: "bold"
    }
})
