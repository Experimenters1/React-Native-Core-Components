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
    flexDirection: 'column',
  },
  box1: {
    flexGrow: 1,  // Box 1 can grow to fill the space
    backgroundColor: 'red',
  
    height: 100, 
   
  },

  box2: {
    flexGrow: 2,  // Box 2 can grow twice as fast as Box 1

    backgroundColor: '#731f8c',
  
    height: 100, 
   
  },
  
  box3: {
    flexGrow: 3,  // Box 3 can grow three times as fast as Box 1
    backgroundColor: '#218c1f',
    width: 150,  // Specific width, if needed
    height: 100, 
   
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f