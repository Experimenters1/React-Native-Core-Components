/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  // Hàm getItemLayout để tăng tốc độ hiển thị và tối ưu hóa cuộn
  const getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  );

  return (
    <FlatList
      data={numbers}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      keyExtractor={item => item.toString()}
      getItemLayout={getItemLayout} // Áp dụng hàm getItemLayout
    />
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  text: {
    fontSize: 20,
  }
});

export default App;





//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f