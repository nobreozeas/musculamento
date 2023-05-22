import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, } from 'react-native';

type Props = {
    titulo: string;
}


const ButtonPrimary = ({titulo}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{titulo}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FD5329',
        width: 316,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ButtonPrimary;