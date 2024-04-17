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
      {/* Other components will be placed here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       justifyContent: 'center',
       alignContent: 'center',
       backgroundColor: '#960e0e',
  }
});

export default App;
