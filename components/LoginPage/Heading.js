import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Heading({ children, style, ...props }) {
    return (
        <Text {...props} style={[style, styles.text]}>
            {children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: '#112545',
        paddingTop: '30%',
        fontWeight: "700",
        marginBottom: '8%',
    }
})