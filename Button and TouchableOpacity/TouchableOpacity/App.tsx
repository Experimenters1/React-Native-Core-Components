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
  TouchableOpacity,
  Alert

} from 'react-native';


const onPressHandler = () => {
  Alert.alert('Bạn đã nhấn vào tôi!');
}

function App(): React.JSX.Element {
 
  return (
       <View style={styles.container}>
     < TouchableOpacity
     style={styles.button}
     activeOpacity={0.6} // Độ mờ khi nhấn vào là 60%
    //  onPress={() => Alert.alert('Đã nhấn! onPress')}
     onPress={onPressHandler}
    //  disabled={true}
      onLongPress={() => {Alert.alert('Đã nhấn! onLongPress')}}
      delayLongPress={60000} // Thời gian chờ là 60000 milliseconds (1 phút)
     > 
       <Text style={styles.buttonText}>Nhấn vào tôi</Text>
       </ TouchableOpacity>
       </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center',
       alignContent:'center',
      backgroundColor: '#97b2de',
      padding: 10,
  },
  button: {
     backgroundColor: '#007AFF',
     padding: 10,
     borderRadius: 45,
  },

  buttonText: {
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