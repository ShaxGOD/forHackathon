import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default function LoginWithAccount() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                или войти используя
</Text>
            <View style={styles.iconView}>
                <SocialIcon
                    type="facebook"
                    onPress={() => {
                        alert('facebook');
                    }}
                />
                <SocialIcon
                    type="google"
                    onPress={() => {
                        alert('facebook');
                    }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    text: {
        color: '#112545',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    },
    iconView: {
        flexDirection: 'row',
        width: '65%',
        justifyContent: 'space-around',
        marginTop: 5
    }
})