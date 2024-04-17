/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {  View, StyleSheet,Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
        <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="cover"
        />

    <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="contain"
        />
      <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="stretch"
        />

      <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="repeat"
        />

     <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="center"
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'red',
  },

  image: {
    width: 200,
    height: 200,
    marginVertical: -25,
  }
});

export default App;


//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f