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

} from 'react-native';



function App(): React.JSX.Element {
 

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Content may vary</Text>
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

  box: {
   minHeight: 160,
   
   width: '80%',
  padding: 10,
   backgroundColor: 'red',
   borderWidth: 1,
   borderColor: '#ccc',
   justifyContent: 'center',
    alignItems: 'center',

  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f