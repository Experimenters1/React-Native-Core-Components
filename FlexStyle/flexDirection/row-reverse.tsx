/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
     <Text style={styles.item}>Item 1</Text>
     <Text style={styles.item}>Item 2</Text>
     <Text style={styles.item}>Item 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, // Container chiếm toàn bộ màn hình
     flexDirection: 'row-reverse', // Các thành phần con sẽ nằm ngang
     justifyContent: 'space-between', // Phân bổ khoảng cách đều giữa các thành phần con
    alignItems: 'center', // Căn giữa các thành phần con theo chiều dọc
    backgroundColor: 'lightgrey'
  },
  
  item: {
    width: 50, // Chiều rộng cố định cho mỗi item
    height: 50, // Chiều cao cố định cho mỗi item
    backgroundColor: 'skyblue', // Màu nền cho mỗi item
    textAlign: 'center', // Căn giữa text trong item
    lineHeight: 50 // Đặt độ cao dòng bằng với chiều cao item để căn giữa text dọc
  }


});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f