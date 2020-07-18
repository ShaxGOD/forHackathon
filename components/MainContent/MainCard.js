import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';


export default function MainCard() {
    return (
        <View style={styles.container}>
            {/* <MapView
                region={{
                    latitude: 51.1478448,
                    longitude: 71.4764519,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05,
                }}
                style={styles.mapStyle} >
                <Marker
                    coordinate={{
                        latitude: 51.1478448,
                        longitude: 71.4764519
                    }}
                    title={'Nur-Sultan'}>
                </Marker>
            </MapView> */}
            <Text style={styles.mainText}>Здесь будет карта в будущем :) </Text>
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
    // mapStyle: {
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height,
    // },
    mainText: {
        marginTop: '50%',
        fontSize: 20,
        fontWeight: "bold"
    }
});
