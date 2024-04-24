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

} from 'react-native';



function App(): React.JSX.Element {
  
  const [value,setValue] = useState(''); 

  const handleBlur = () => {
    console.log('Input field was blurred');
  }; 

  return (
     <View style={styles.container}>
        <TextInput
           style={styles.input}
           onChangeText={text => setValue(text)}
           value={value}
           placeholder="Enter text"
           onBlur={handleBlur}
          >

          </TextInput>
     </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
     flex: 1,
  
    justifyContent: 'center',
   
     alignItems: 'center',
  },



  input: {
    backgroundColor: 'red',
    position: 'relative',
     height: 40,
     borderColor: 'gray',
     width: '80%',
     borderWidth: 3,
 
  },

 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f