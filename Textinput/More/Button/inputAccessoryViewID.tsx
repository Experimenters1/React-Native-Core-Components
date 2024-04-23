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
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
  Alert,


} from 'react-native';



function App(): React.JSX.Element {
  
  const [text,setText] = useState(''); 

  return (
     <KeyboardAvoidingView 
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.keyboardView}
     >
      <TextInput 
      style={styles.textInput}
      onChangeText={setText}
      value={text}
      placeholder="Type here..."
      inputAccessoryViewID="uniqueID"
      />

       <View nativeID="uniqueID" style={styles.accessoryView}>
         <Button  title="Clear" onPress={() => setText('')} />
         <Button title="Submit" onPress={() => Alert.alert('Submit') }/>
       </View>

     </KeyboardAvoidingView>
  );

  
}

const styles = StyleSheet.create({
  keyboardView: {
    backgroundColor: 'blue',
     flex: 1,
  
    justifyContent: 'center',
   
     alignItems: 'center',
  },

  absoluteBox: {
   backgroundColor: 'red',
   padding: 10,
   position: 'absolute', // Absolute positioning
   top: 150, // 150 pixels from the top of the container
   left: 100, // 100 pixels from the left of the container
  },

  textInput: {
    backgroundColor: 'red',
    position: 'relative',
     height: 40,
     borderColor: 'gray',
     width: '80%',
     borderWidth: 3,
 
  },

  accessoryView: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     padding: 10
  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f