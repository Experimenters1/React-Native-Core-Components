/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {
  TextInput,StyleSheet,Button,View
} from 'react-native';


function App(): React.JSX.Element {
   const [username,setUsername] = useState('');
   const [password,setPassword] = useState('');

  return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
           <TextInput 
           placeholder='Username' 
           value={username}
           onChangeText={setUsername}
           style={styles.input}  
           
           />
          <TextInput 
             placeholder="Password" 
             onChangeText={setPassword}
             secureTextEntry
             style={styles.input}
          />
          <Button title="Login"  onPress={() => console.log('Login pressed')} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
  },

  inputContainer: {
     width: '80%',
     justifyContent: 'center',
     alignContent: 'center'
  },

  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f