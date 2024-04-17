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
     {/* Hình ảnh từ internet */}
     <Image
       source={{uri: 'https://images2.thanhnien.vn/528068263637045248/2024/4/16/screen-shot-2024-04-16-at-223050-17132814759361437914300.png'}}
       style={styles.image}
       resizeMode="cover"
       />

        {/* Hình ảnh từ local */}
        <Image 
        source={require('./img/images.jpeg')} 
        style={styles.image}
        resizeMode="contain"
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
    marginVertical: 20,
  }
});

export default App;


//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f