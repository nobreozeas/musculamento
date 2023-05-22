import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeBaseProvider, Box, Checkbox } from 'native-base';
import CheckboxInput from '../components/Checkbox';
import Input from '../components/Input';
import InputPass from '../components/InputPass';
import ButtonPrimary from '../components/ButtonPrimary';




const Login = () => {

    return (
        <>
            <NativeBaseProvider>
                <View style={styles.logoArea}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                </View>
                <View>
                    <Text>LOGIN</Text>
                    <View>
                        <Input texto="E-mail" />
                        <InputPass texto="Senha" />
                        <ButtonPrimary titulo="ENTRAR" />
                        <Text style={{color: '#5B5B5B', marginTop:10}}>Esqueceu sua senha?</Text>
                    </View>
                </View>

                <View style={styles.boxEmail}>
                    <Text style={styles.textEmail}>entrar com</Text>
                    <Image 
                        source={require('../assets/images/gmail.png')}
                        style={styles.email}
                    />
                </View>

                <View style={styles.linkCadastro}>
                    <Text style={{color: '#5B5B5B', marginTop:10}}>Não tem uma conta? <Text style={{color: '#FD5329'}}>Cadastre-se</Text></Text>
                </View>
                
            </NativeBaseProvider>
        </>
    );
};

const styles = StyleSheet.create({
    logoArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    logo: {
        width: 160,
        height: 200,
        resizeMode: 'contain'
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

export default Login;