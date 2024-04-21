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

// Tạo một danh sách các phần tử text
const items = Array.from({ length: 50},(_,i) => `Item ${i+1}`);

function App(): React.JSX.Element {

  return (
     <View style={styles.container}>
        <Text style={styles.header}>Scroll with Indicator</Text>
        <ScrollView
         style={styles.scrollView}
         showsVerticalScrollIndicator={true}  // Hiển thị thanh cuộn dọc
        >
          {items.map((item,index) => (
            <View key={index} style={styles.item}>
               <Text>{item}</Text>
            </View>
          ))}

        </ScrollView>


        <Text style={styles.header}>Scroll without Indicator</Text>
        <ScrollView
           style = {styles.scrollView}
           showsVerticalScrollIndicator={false}
        >
          {items.map((item,index) => (
             <View key={index} style={styles.item}>
             <Text>{item}</Text>
          </View>
          ))}

        </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#328f6d',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#32758f'
  },

  scrollView: {
    backgroundColor: '#c0b6d1',
    marginHorizontal: 20,
    height: 150,
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
    borderRadius: 40,
    shadowColor: '#0f1c17',
    shadowOffset: {width: 0,height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f