import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const MainPicker = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.input}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Категория" value="Категория" />
                <Picker.Item label="Первая группа" value="first" />
                <Picker.Item label="Вторая группа" value="second" />
                <Picker.Item label="Третья группа" value="third" />
                <Picker.Item label="Ребёнок-инвалид первой группы" value="thir" />
                <Picker.Item label="Ребёнок-инвалид второй группы" value="third" />
                <Picker.Item label="Ребёнок-инвалид третьей группы" value="third" />

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

export default MainPicker;