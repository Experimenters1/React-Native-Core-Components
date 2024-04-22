/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';



function App(): React.JSX.Element {
 
  return (
       <View style={styles.container}>
          <View style={styles.box}>
             <Text style={styles.Text}>Hello Worlds</Text>
          </View>
       </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center',
       alignContent:'center',
      backgroundColor: '#97b2de',
      padding: 10,
  },
  box: {
     backgroundColor: '#007AFF',
     padding: 10,
     borderRadius: 45,
     height: 350,
     width: 350,
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 15
  },

  Text: {
    backgroundColor: '#fff',
    height: 40,
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f