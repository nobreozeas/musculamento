import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
    texto: string;
}

const InputPass = ({texto}) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={texto}
            secureTextEntry={true}
        />
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

export default InputPass;
