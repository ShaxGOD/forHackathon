import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FilledButton({ title, style, onPress }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63bf7c',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 25,
        padding: 15,
        width: 190,
        marginTop: '4%',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 8, // Android
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})