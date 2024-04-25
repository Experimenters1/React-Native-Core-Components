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
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,

} from 'react-native';

import UsersComponent from './Component/UsersComponent';



function App(): React.JSX.Element {
 
  return (
    <SafeAreaView style={styles.container}>
      <UsersComponent />
      
     </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcba03'
  },


 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f