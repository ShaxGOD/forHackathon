import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const SecondPicker = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.input}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Степень" value="Степень" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />


            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: '3%',
        padding: 2,
        width: '95%',
        borderRadius: 25,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 16,
        backgroundColor: 'white'
    },
});

export default SecondPicker;