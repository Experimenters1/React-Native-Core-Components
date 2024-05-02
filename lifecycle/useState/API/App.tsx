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
 

} from 'react-native';

import PostApp from './Component/PostApp';  // Ensure the path matches where your PostApp component is saved



function App(): React.JSX.Element {
 
 
  return (
    <SafeAreaView style={styles.container}>
      <PostApp />
    </SafeAreaView>
      
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full height of the screen
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center' , // Centers content horizontally
  }
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f