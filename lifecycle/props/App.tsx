/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert

} from 'react-native';

import Welcome from './Component/Welcome';


function App(): React.JSX.Element {
  
 const handldePress = () => {
      Alert.alert("Button Pressed");
 };
 
 
  return (
    <View style={styles.container}>
      <Welcome name='Alice' />
      <Welcome name='Bob' />
      <TouchableOpacity style={styles.button} onPress={handldePress} >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcba03'
  },

  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    color: 'white'
  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f