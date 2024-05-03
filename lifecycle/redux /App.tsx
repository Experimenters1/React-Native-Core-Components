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

import rootReducer from './Component/reducers';
import { createStore } from 'redux';
import {Provider} from 'react-redux';




const store = createStore(rootReducer);

function App(): React.JSX.Element {
  

  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Welcome to Redux in React Native with TypeScript!</Text>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => store.dispatch({ type: 'INCREMENT' })}

        >
        <Text  style={styles.buttonText}>Increase Count</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => store.dispatch({ type: 'DECREMENT' })}
        >
        <Text  style={styles.buttonText}>Decrease Count</Text>
        </TouchableOpacity>
  </SafeAreaView>
  </Provider>
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