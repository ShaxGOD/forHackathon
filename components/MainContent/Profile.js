import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Здесь будет Профиль в будущем :)</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        marginTop: '50%',
        fontSize: 20,
        fontWeight: "bold"
    }
})
