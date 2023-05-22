import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';
import { Avatar, VStack, Center, NativeBaseProvider } from 'native-base';


const AvatarIcon = () => {
    return (
        <VStack>
             <Avatar bg="amber.500" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }} size="lg">
      </Avatar>
        </VStack>
    );
}



export default AvatarIcon;