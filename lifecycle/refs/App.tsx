/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useRef} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text

} from 'react-native';


function App(): React.JSX.Element {

  const inputRef = useRef<TextInput>(null);  // Tạo một ref 
  
  

 const focusTextInput = () => {
  if (inputRef.current) {
    inputRef.current.focus(); // Safely call focus only if current is not null
  }
 };
 
 
  return (
    <View style={styles.container}>
       <TextInput  
       ref={inputRef} // Gán ref tới TextInput
       style={styles.input}
       /> 

      <TouchableOpacity 
      style={styles.button} 
      onPress={focusTextInput }>
        <Text style={styles.buttonText}>Focus the input</Text>
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

  input: {
    backgroundColor: 'red',
    width: 360,
    height: 40,
  }
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f