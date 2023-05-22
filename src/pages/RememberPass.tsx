import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeBaseProvider, Box, Checkbox } from 'native-base';
import Input from '../components/Input';
import ButtonPrimary from '../components/ButtonPrimary';

const RememberPass = () => {
    return (
        <>
            <NativeBaseProvider>
                <View style={styles.logoArea}>
                    <Image style={styles.logo} source={require('../assets/images/logo_nome.png')} />
                </View>

                <View>
                    <Text>REDEFINIR SENHA</Text>
                    <View>
                        <Input
                            texto="E-mail"
                        />
                        <ButtonPrimary titulo="ENVIAR CÓDIGO"/>
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

export default RememberPass;