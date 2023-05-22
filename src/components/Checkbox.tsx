import React, { useState } from "react";
import { NativeBaseProvider, Box, Text } from 'native-base';
import { StyleSheet, View } from "react-native";
import Checkbox from "expo-checkbox";

const CheckboxInput = () => {
  const [checked, setChecked] = useState(false);

  return(
    <View style={styles.row}>
      <Checkbox style={styles.checkbox} value={checked} onValueChange={setChecked} color="orange" />
      <Text>Concordo com os <Text style={{color: '#FD5329'}}>Termos de Uso</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:20
  },
  checkbox: {
    marginRight: 10,
  },

});


export default CheckboxInput;


