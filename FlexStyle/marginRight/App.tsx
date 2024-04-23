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
      <View style={styles.innerBox}>
        <Text >Box with Margin</Text>
      </View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',

     flex: 1,
  
    justifyContent: 'center',
   
     alignItems: 'center',
  },

  innerBox: {
   width: 150,
   height: 150,  // Chiều cao 200 pixel
   backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',

  marginRight: 60,

  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f