/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';


function App(): React.JSX.Element {
  return (
    <View style={[styles.container,styles.horizontal]}>
      <ActivityIndicator />
       <ActivityIndicator size="large" />
       <ActivityIndicator size="small" color='#32a852'/>
       <ActivityIndicator size="large" color='#523d54'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center'
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }


});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f