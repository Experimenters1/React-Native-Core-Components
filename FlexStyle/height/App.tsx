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
       <View style={styles.tallBox}>
        <Text>Tall Box</Text>
      </View>
      <View style={styles.shortBox}>
        <Text>Short Box</Text>
        </View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    padding: 10,
    marginTop: 70,
     flex: 1,
     justifyContent: 'space-around',
     alignItems: 'center',
  },

  tallBox: {
   width: 150,
   height: 200,  // Chiều cao 200 pixel
   backgroundColor: 'red',
   justifyContent: 'center',
   alignItems: 'center',
  },

  shortBox: {
    backgroundColor: '#34C759',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: "center",
  }

 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f