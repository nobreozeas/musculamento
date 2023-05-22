import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import RememberPass from './src/pages/RememberPass';
import Home from './src/pages/Home';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FD532933' />
      <Home />
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 32 : 0
  },
});
