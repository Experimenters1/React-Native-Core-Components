/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';


function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Welcome to our application!</Text>
      <Image source={{ uri: "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/4/16/thu-tuong-tim-cook-1-1713248016127188772651.png" }} style={styles.image} />
      <Text style={styles.text}>
      Here is some more text just to demonstrate scrolling. You can add as much content as you want and it will scroll.
    </Text>
    <Image source={{ uri: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/4/16/1328043/Timcook-Ha-Noi.jpg" }} style={styles.image} />
    <Text style={styles.text}>
      The end of the ScrollView! You might want to add other components or more text.
    </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      //  flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
      marginTop:100,
      // paddingHorizontal: 10,
      // backgroundColor: '#97b2de',
      padding: 20,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 20,
    padding: 20,
  },


});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f