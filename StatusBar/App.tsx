/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button

} from 'react-native';




function App(): React.JSX.Element {
   const [hidden,setHidden] = useState(false);

  return (
       <View style={styles.container}>
        <StatusBar  
         barStyle="light-content"
         backgroundColor="#4f6d7a" 
         hidden={hidden}
        />

     <Text style={styles.text}> 
        {hidden ? "StatusBar is hidden. Tap the button to show it." : "StatusBar is visible. Tap the button to hide it."}
      </Text>
      <Button title={hidden ? "Show StatusBar" : "Hide StatusBar"} onPress={() => setHidden(!hidden)} />
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center',
       alignContent:'center',
      backgroundColor: '#97b2de',
  },

  text: {
    backgroundColor: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f