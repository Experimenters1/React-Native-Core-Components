/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);  // State to control the disabled property

  const handlePress = () => {
    setIsDisabled(true);  // Disable the button when pressed
    Alert.alert('Button was pressed!', 'The button will be disabled temporarily.', [
      { text: "OK", onPress: () => setIsDisabled(false) }  // Re-enable the button on pressing "OK"
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={handlePress}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        // disabled
        disabled={isDisabled}  // Using the state to control the disabled property
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;


//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f