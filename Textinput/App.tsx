/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,

} from 'react-native';




function App(): React.JSX.Element {
 
  const [inputValue,setInputValue] = useState('');

  const handleOnSubmit = () => {
    console.log('inputValue: ',inputValue);
  };

  return (
       <View style={styles.container}>
     <TextInput 
     style={styles.input}
     onChangeText={text => setInputValue(text)}
     value={inputValue}
     placeholder="Nhập văn bản ở đây..."
     keyboardType="default"
     secureTextEntry={false}
     autoFocus={true} // Bàn phím sẽ tự động mở khi TextInput này được hiển thị
     onSubmitEditing={handleOnSubmit} // Xử lý sự kiện nhấn Enter
     /> 
       
     
       </View>
  );

  console.log('inputValue: ',inputValue);
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center',
       alignContent:'center',
      backgroundColor: '#97b2de',
      padding: 10,
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f