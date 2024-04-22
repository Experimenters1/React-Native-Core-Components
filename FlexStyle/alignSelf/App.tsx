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
      <Text style={[styles.box,styles.alignSelfCenter]}>Box 2</Text>
      <Text style={[styles.box, styles.alignSelfEnd]}>Box 3</Text>
      <Text style={[styles.box, styles.alignSelfEnd1]}>Box 4</Text>
      <Text style={[styles.box, styles.alignSelfEnd2]}>Box 5</Text>
      <Text style={[styles.box, styles.alignSelfEnd3]}>Box 6</Text>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',// Trục chính là ngang
    alignItems: 'flex-start', // Canh chỉnh các box ở giữa trục thẳng đứng

  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
    textAlign: 'center',
    lineHeight: 50, // Để văn bản ở giữa theo chiều cao
  },
  
  alignSelfCenter: {
    alignSelf: 'center', // Căn giữa theo trục cross
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',  // Căn cuối theo trục cross
  },

  alignSelfEnd1: {
    alignSelf: 'flex-start',
  },

  alignSelfEnd2: {
    alignSelf: 'stretch',
  },

  alignSelfEnd3: {
    alignSelf: 'baseline',
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f