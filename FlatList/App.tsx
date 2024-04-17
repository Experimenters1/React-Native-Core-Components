/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

function App(): React.JSX.Element {

  const data = [
   { id : '1',title: 'Mục lục 1'},
   { id : '2',title: 'Mục lục 2'},
   { id : '3',title: 'Mục lục 3'},
  
  ];

    const returnItem = ({ item }) => (
      <Text style={styles.item}>{item.title}</Text>
    );

  return (
    <View style={styles.container}>
       <FlatList data={data} renderItem={returnItem} keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center', // Căn giữa theo chiều dọc
       alignContent: 'center', // Căn giữa theo chiều ngang
       backgroundColor: '#960e0e', 
       paddingTop: '60%'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#ffffff',
    textAlign: 'center',
  }

});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f