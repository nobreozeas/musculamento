import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
    texto: string;
}

const Input = ({ texto }) => {
    return (
        <TextInput style={styles.input} placeholder={texto} />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 316,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff'
    }
});

export default Input;


