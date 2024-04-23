/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';



function App(): React.JSX.Element {
 

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
          dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
          Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
          molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
          scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
          eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.</Text>
      </View>
  </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
     flex: 1,
  
    justifyContent: 'center',
   
     alignItems: 'center',
  },

  box: {
   
  
   backgroundColor: 'red',
   borderWidth: 5,
   borderColor: '#ccc',
   justifyContent: 'center',
   alignItems: 'center',
   paddingEnd: 270,  // More padding at the end
  
  },
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f