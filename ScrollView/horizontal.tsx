/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View, Text, StyleSheet,ScrollView
} from 'react-native';

// Tạo một danh sách các màu để hiển thị
const colors = ['red','green','blue','yellow','purple','orange'];

function App(): React.JSX.Element {

  return (
     <View style={styles.container}>
        <Text style={styles.header}>Horizontal Scrolling</Text>
        <ScrollView
        horizontal={true} // Thiết lập cuộn ngang
        style={styles.horizontalScrollView}
         showsVerticalScrollIndicator={true}  // Hiển thị thanh cuộn dọc
        >
          {colors.map((color,index) => (
            <View key={index} style={[styles.box ,{backgroundColor: color}]} />
            
          ))}

        </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#328f6d',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50,
    marginBottom: 20,
    backgroundColor: '#32758f'
  },

  horizontalScrollView: {
    // backgroundColor: '#c0b6d1',
    backgroundColor: 'white',
    // marginHorizontal: 20,
    width: '100%',
    height: 150,
    marginBottom: 190, 
   
  
  },

  box: {
    backgroundColor: 'white',
    padding: 20,
    marginRight: 10,
    width: 150,
    borderRadius: 40,
    shadowColor: '#0f1c17',
    elevation: 2,
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f