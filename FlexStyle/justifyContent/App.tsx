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
       <Text style={styles.box}>Box 1</Text>
       <Text style={styles.box}>Box 2</Text>
       <Text style={styles.box}>Box 3</Text>
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
    //  justifyContent: 'space-around',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
     alignItems: 'center',
  },

  box: {
   width: 150,
   height: 200,  // Chiều cao 200 pixel
   backgroundColor: 'red',
   textAlign: 'center',
   lineHeight: 50, // Vertically center text inside the box
  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f