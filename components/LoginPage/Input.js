import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';


export default function Input({ style, ...props }) {
    return (
        <TextInput {...props} placeholderTextColor="#112545" style={[style, styles.input]} />

    );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
    }
})