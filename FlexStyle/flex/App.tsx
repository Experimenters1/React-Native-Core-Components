/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet } from 'react-native';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, // Container chiếm toàn bộ màn hình
     flexDirection: 'row', // Các thành phần con sẽ nằm ngang
     backgroundColor: '#9fa81e',
  },
  
  box1: {
    flex: 1, // Chiếm 1/3 không gian của container (vì tổng flex của các box là 3)
    backgroundColor: 'red',
  },
  box2: {
    flex: 2, // Chiếm 2/3 không gian của container
    backgroundColor: 'blue',
  }


});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f