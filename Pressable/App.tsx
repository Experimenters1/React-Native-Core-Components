/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {
  Modal,View,Text,Button,StyleSheet,Alert,
  Pressable
} from 'react-native';


function App(): React.JSX.Element {
   const [modalVisible,setModalVisible] = useState(false);

  return (
     <View style={styles.centeredView}>
      <Pressable 
        onPress={() => console.log('Pressed!')}
        onLongPress={() => console.log('Long preseed!')}
        onPressIn={() => console.log('Press in!')}
        onPressOut={() => console.log('Press out!')}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210,230,255)' : 'White'
          },
          styles.button
        ]}
        >
        <Text style={styles.text}>Press Me</Text>

        </Pressable>
     </View>

  );
}

const styles = StyleSheet.create({
  centeredView: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 22,
  },

  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "Black",
  },

  text: {
    fontSize: 16,
    color:'black',
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f