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
  const [count,setCount] = useState(0);

   const increaseCount = () => {
      setCount(count + 1)
   }


  return (
     <View style={styles.container}>
        <Text>Count: {count}</Text>
          
          <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={increaseCount}
          >
           <Text style={styles.buttonText}>Increase Count</Text>
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