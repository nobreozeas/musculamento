import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeBaseProvider, Box, Checkbox } from 'native-base';
import CheckboxInput from '../components/Checkbox';
import Input from '../components/Input';
import InputPass from '../components/InputPass';
import ButtonPrimary from '../components/ButtonPrimary';




const Register = () => {

    return (
        <>
            <NativeBaseProvider>
                <View style={styles.logoArea}>
                    <Image style={styles.logo} source={require('../assets/images/logo_nome.png')} />
                </View>

                <View>
                    <Text>REGISTRE-SE</Text>
                    <View>
                        <Input 
                            texto="Nome" 
                        />
                        <Input
                            texto="E-mail"
                        />
                        <InputPass
                            texto="Senha"
                        />
                        <InputPass
                            texto="Confirmar senha"
                        />

                       <CheckboxInput />

                        <ButtonPrimary titulo="CONFIRMAR"/>
                    </View>
                </View>
            </NativeBaseProvider>
        </>
    );
};

const styles = StyleSheet.create({
    logoArea: {
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 230,
        height: 50,
        resizeMode: 'contain',
    },
    input: {
        height: 50,
        width: 316,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    boxEmail: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    email: {
        width:50,
        height:50,
        resizeMode: 'contain',
        marginTop: 10
    },
    textEmail: {
        color: '#5B5B5B',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    linkCadastro: {
        marginTop: 20
    }
});

export default Register;