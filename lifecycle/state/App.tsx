/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text

} from 'react-native';




function App(): React.JSX.Element {
  const [count,setCount] = useState(0); // Khởi tạo state với giá trị ban đầu là 0

  const incrementCount = () => {
    setCount(count + 1); // Cập nhật state để tăng count
  };
 
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Count: {count}</Text>
      <TouchableOpacity 
      style={styles.button} 
      onPress={incrementCount}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcba03'
  },

  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    color: 'white'
  },

  text: {
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 35,
  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f