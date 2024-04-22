/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';



function App(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

const toggleVisibility = () => {
  setIsVisible(!isVisible);
};

  return (
    <View style={styles.container}>
        <View style={[styles.box, { display: isVisible ? 'flex' : 'none' }]}>
        <Button title="Nhấn vào tôi" onPress={toggleVisibility} />
      </View>

      <Button title="Ẩn/Hiện hộp" onPress={toggleVisibility} />
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  box: {
    padding: 20,
    backgroundColor: 'red',
    width: '50%', // Thiết lập chiều rộng là 50% của container
    height: 100, 
    marginBottom: 20,
    borderBottomColor: 'white', // Màu sắc của đường viền dưới
  },
  
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f