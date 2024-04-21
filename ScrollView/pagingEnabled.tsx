/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View, Text, StyleSheet,ScrollView, Dimensions
} from 'react-native';

// Tạo một danh sách các màu để hiển thị
const colors = ['red','green','blue','yellow','purple','orange'];

const { width } = Dimensions.get('window') // Lấy chiều rộng của màn hình

function App(): React.JSX.Element {

  return (
     <View style={styles.container}>
        <Text style={styles.header}>pagingEnabled</Text>
        <ScrollView
        horizontal={true} // Thiết lập cuộn ngang
        pagingEnabled= {true} // Bật tính năng cuộn theo trang
        style={styles.ScrollView}
        showsHorizontalScrollIndicator={true}  // Hiển thị thanh cuộn ngang
        >
          {colors.map((color,index) => (
            <View key={index} style={[styles.page ,{backgroundColor: color,width: width}]} >
             <Text style= {styles.text} > {color.toUpperCase()}</Text>
             </View>
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

  ScrollView: {
    // backgroundColor: '#c0b6d1',
    backgroundColor: 'white',
    // marginHorizontal: 20,
    width: '100%', // Chiều rộng của ScrollView
    height: 150,
    marginBottom: 190, 
   
  
  },

  page: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 40,
    shadowColor: '#0f1c17',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f