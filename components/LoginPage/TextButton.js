import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TextButton({ title, style, onPress }) {
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
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
        marginBottom: '10%',
        marginTop: 20
    },
    text: {
        color: '#112545',
        fontWeight: 'bold',
        fontSize: 18
    }
})