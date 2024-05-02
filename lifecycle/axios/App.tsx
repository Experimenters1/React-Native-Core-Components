import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Text,
  Button
 

} from 'react-native';

import PostApp from './Component/PostApp';  // Ensure the path matches where your PostApp component is saved

function App(): React.JSX.Element {



  return (
    <SafeAreaView style={styles.container}>
    <PostApp />
  </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#97b2de',

  },

  button: {
    backgroundColor: 'red',
    width: 150,
    marginTop: 10,
    borderRadius : 30,
    padding: 10,
    
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    
  }
  
});

export default App;