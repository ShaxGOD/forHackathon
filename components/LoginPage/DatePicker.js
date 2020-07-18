import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import 'react-native-gesture-handler'
import { View, Text, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function DatePicker() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('Дата рождения');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setTitle(currentDate.toString());
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={{ width: '110%', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.container]} onPress={showDatepicker} title={title}>
                <Text style={styles.text}>
                    {title}
                </Text>
                <MaterialIcons name="date-range" size={24} color="black" />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: '4%',
        padding: 14,
        width: '85%',
        borderRadius: 25,
        elevation: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        fontWeight: 'bold',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})