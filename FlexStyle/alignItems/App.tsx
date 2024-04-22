/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text
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
    flex: 1,
    flexDirection: 'row',// Trục chính là ngang
    alignItems: 'center', // Canh chỉnh các box ở giữa trục thẳng đứng
    // alignItems: 'flex-start', 
    // alignItems: 'flex-end', 
    // alignItems: 'stretch', 
    // alignItems: 'baseline', 
  },
  box: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    margin: 10,
    textAlign: 'center',
    lineHeight: 50, // Để văn bản ở giữa theo chiều cao
  },

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f