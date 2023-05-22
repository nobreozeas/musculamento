import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AvatarIcon from '../components/AvatarIcon';
import SliderBanner from '../components/SliderBanner';

const Home = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar backgroundColor='#fff' />
                <View style={styles.areaAvatar}>
                    <AvatarIcon />
                    <View>
                        <Text style={styles.msgAvatar}>Bem vindo(a)</Text>
                        <Text style={styles.textAvatar}>Gabrielly Aguiar</Text>
                    </View>
                </View>

                <View>
                    <SliderBanner />
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    areaAvatar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgAvatar: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
        color: '#AEADAB'
    },
    textAvatar: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
        color: '#000'
    }
   
});


export default Home;