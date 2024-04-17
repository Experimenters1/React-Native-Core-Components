/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Button,SafeAreaView ,Alert} from 'react-native';


function App(): React.JSX.Element {
   const handlePress = () => {
    Alert.alert('Button was pressed!');
   };


  return (
    <View style={styles.container}>
      <Button 
      title="Click Me" 
      onPress={handlePress} 
      color="#841584"  
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, // Container chiếm toàn bộ màn hình
     justifyContent: 'center', // Phân bổ khoảng cách đều giữa các thành phần con
    alignItems: 'center', // Căn giữa các thành phần con theo chiều dọc
    backgroundColor: 'lightgrey',
  },
  


});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f