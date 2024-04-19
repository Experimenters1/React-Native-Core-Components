/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState} from 'react';
import {
  Modal,View,Text,Button,StyleSheet,Alert
} from 'react-native';


function App(): React.JSX.Element {
   const [modalVisible,setModalVisible] = useState(false);

  return (
     <View style={styles.centeredView}>
      <Modal 
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Button  title="Hide Modal"  
                onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>

      <Button 
          title="Show Modal"
          onPress={() => setModalVisible(true)}
          />
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

  modalView: {
    margin: 22,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 60,
    alignItems: 'center',
    shadowColor: '#9fa81e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
   
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }

});

export default App;




//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f