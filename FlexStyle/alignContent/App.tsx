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
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // alignContent: 'flex-start',
    // alignContent: 'flex-end',
    // alignContent: 'center',
    // alignContent: 'stretch',
    // alignContent: 'space-between',
    alignContent: 'space-around',

  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 10
  },

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f