/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight

} from 'react-native';

const showAlert = () => {
  Alert.alert(
     "Xác nhận" , // Tiêu đề
     "Bạn có chắc chắn muốn thực hiện hành động này không?",  // Nội dung thông điệp
     [
      {text: "Huỷ bỏ",onPress: () => console.log("Hành động đã bị hủy"), style: "cancel"},
      {text: "Đồng ý",onPress: () => console.log("Hành động được thực hiện")}
     ],
     {cancelable: false} // Không cho phép người dùng tắt thông báo bằng cách nhấn ra ngoài
  );
}

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.button} 
        underlayColor="#0056b3" 
        onPress={showAlert}
      >
        <Text style={styles.buttonText}>Hiện thông báo</Text>
      </TouchableHighlight>
      </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f