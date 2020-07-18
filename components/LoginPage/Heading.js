import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({ children, style, ...props }) {
    return (

        <Text {...props} style={[style, styles.text]}>
            {children}
        </Text>

    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        color: '#112545',
        paddingTop: '8%',
        fontWeight: "700",
    }
})