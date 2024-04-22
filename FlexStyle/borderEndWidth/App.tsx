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
    <Text style={styles.box}>Hello, World!</Text>
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
    padding: 20,
    backgroundColor: 'red',
    width: '50%', // Thiết lập chiều rộng là 50% của container
    height: 100, 
    borderEndWidth: 300, // Đặt độ dày đường viền ở cạnh cuối là 5 pixels
    borderBottomColor: 'white', // Màu sắc của đường viền dưới
  },
  
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f