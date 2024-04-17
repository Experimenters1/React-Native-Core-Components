/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
     <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxRO6aQ1YXc9Bnj8vcwBXpFCLjea-JmlPF7-4fg1Dhg&s'}} style={styles.image} />
     <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center', // Căn giữa theo chiều dọc
       alignContent: 'center', // Căn giữa theo chiều ngang
       backgroundColor: '#960e0e',
  },
  text: {
    
    fontSize: 20,
    color: 'blue',
    textAlign: 'center', // Văn bản của bạn sẽ được căn giữa màn hình
    marginTop: 100
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    left: '25%',
  }
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f