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
       <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
        <View style={styles.box3}>
        <Text>Box 3 - Long content that might cause shrinking</Text>
      </View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 70,
  },
  box1: {
   
    backgroundColor: 'red',
    flexShrink: 1,  // This box will shrink if necessary
    height: 100, 
    minWidth: 50,  // Minimum width to prevent too much shrinkage
  },

  box2: {
    flexShrink: 0, // This box will not shrink
    backgroundColor: '#731f8c',
  
    height: 100, 
    width: 100,
  },
  
  box3: {
    flexShrink: 2,  // This box will shrink more aggressively
    backgroundColor: '#218c1f',
     
    height: 100, 

    minWidth: 50, 
   
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f