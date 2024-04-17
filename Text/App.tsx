/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
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
  }
});

export default App;
