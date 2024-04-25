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
  ScrollView,
  SafeAreaView,
  Button,

} from 'react-native';

import UserProfile from './Component/UserProfile';



function App(): React.JSX.Element {
  const [userId,setUserId] = useState('');
  const [submit,setSubmit] = useState(false);

  const handlePress = () => {
     setSubmit(true);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
        />
        <Button  
        title="Load User Profile"
        onPress={handlePress}
        color="#841584"
        />
      </View>
      {submit && <UserProfile userId={parseInt(userId,10)}/>}
      
     </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcba03'
  },
  
  inputContainer: {
    marginBottom: 20,
    backgroundColor: "#a68529"
  },

   input: {
     height: 40,
     width: 200,
     borderColor: "#a6298b",
     borderWidth: 2,
     marginBottom: 10,
     paddingHorizontal: 30,
   },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f