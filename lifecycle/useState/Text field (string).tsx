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



function App(): React.JSX.Element {
  const [text,setText] = useState('');



   const handleChange = (newText: string) => {
     setText(newText);
   };

   const resetText = () => {
      setText('hello');
   };


  return (
     <View style={styles.container}>
        <TextInput 
         value={text}
         onChangeText={handleChange}
         style={styles.TextInput}
        />
        
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={resetText}
        >

         <Text style={styles.buttonText} >Reset</Text>
        </TouchableOpacity>

     </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#97b2de',
  },

  TextInput: {
    backgroundColor: 'red',
    width: 250,
    marginTop: 10,
    borderRadius : 30,
    padding: 10,
    
  },
  

  button: {
    backgroundColor: '#704368',
    padding: 20,
    marginTop: 20,
    height: 55,
    width: 100,
    borderRadius: 45,

  },

  buttonText: {
    textAlign: 'center',
    
  },



  
});

export default App;