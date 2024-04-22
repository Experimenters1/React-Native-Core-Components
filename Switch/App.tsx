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
  Switch

} from 'react-native';




function App(): React.JSX.Element {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState); //ẽ chuyển từ ON sang OFF hoặc từ OFF sang ON mỗi khi người dùng tương tác với nó

  return (
       <View style={styles.container}>
        <Switch
           trackColor={{false: '#767577',true: "#81bOff"}}
           thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
           ios_backgroundColor="#3e3e3e"
           onValueChange={toggleSwitch}
           value={isEnabled}
           style ={styles.switchStyle}
        />

     <Text style={styles.text}> 
       {isEnabled ? "Switch is ON" : "Switch is OFF"}
      </Text>
     
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

  switchStyle: {
   marginLeft: '43%',
  },
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f