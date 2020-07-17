import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { SocialIcon } from 'react-native-elements'

export default function LoginWithAccount() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                или войти используя
</Text>
            <View style={styles.iconView}>
                {/* <SocialIcon
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
                /> */}
                <Image style={{ width: 53 }} source={require('../../assets/facebook.png')} />
                <Image style={{ width: 48 }} source={require('../../assets/google.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {
        color: '#112545',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '6%',
        opacity: 0.5
    },
    iconView: {
        marginTop: 12,
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around',

    }
})