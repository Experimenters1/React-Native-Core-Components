/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
    <View style={styles.box}></View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  box: {
    backgroundColor: 'red',
    width: '50%', // Thiết lập chiều rộng là 50% của container
    height: 100, 
    // aspectRatio: 1, // Duy trì tỷ lệ khung hình là 1:1 (hình vuông)
    // aspectRatio: 2, // Duy trì tỷ lệ khung hình là 1:1 (hình vuông)
    aspectRatio: 0.5, // Duy trì tỷ lệ khung hình là 1:1 (hình vuông)
  },
  
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f