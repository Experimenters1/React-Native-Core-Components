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
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
        <View style={styles.box}>
        <Text>Box 3 - Long content that might cause shrinking</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 4</Text>
      </View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    padding: 10,
    marginTop: 70,
    // flexWrap: 'wrap', // Enables wrapping of children
    // flexWrap: 'nowrap',
    flexWrap: 'wrap-reverse',
  },

  box: {
   width: 100,
   height: 100,
   backgroundColor: 'red',
   margin: 10,

  },

 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f