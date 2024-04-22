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
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',  // Horizontal layout
  },
  box1: {
    flexBasis: 100, // Width of 100 units
    backgroundColor: 'red',
  
    height: 100, 
   
  },

  box2: {
    flexBasis: '30%', // Width of 30% of the container
    backgroundColor: '#731f8c',
  
    height: 100, 
   
  },
  
  box3: {
    flexBasis: 'auto',  // Size based on content or specific dimensions
    backgroundColor: '#218c1f',
    width: 150,  // Specific width, if needed
    height: 100, 
   
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f