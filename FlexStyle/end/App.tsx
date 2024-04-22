/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';



function App(): React.JSX.Element {
 

  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <Text>Welcome to React Native!</Text>
      </View>

    
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
    borderBottomColor: 'white', // Màu sắc của đường viền dưới
    // Định vị phần tử dựa trên hướng ngôn ngữ
     position: 'absolute',
    end: 20,  // Canh lề 20 pixels từ phần cuối của container
  },
  
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f