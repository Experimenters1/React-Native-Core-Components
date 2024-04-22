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
  VirtualizedList

} from 'react-native';


interface Item{
   id: String,
   title: String,
}



const DATA: Item[] = [];
const getItemCount = (_data: Item[]) => 50;// Giả định có 50 item
const getItem = (_data: Item[],index: number) => {
   return {
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`
   }
}




const Item = ({title }: {title: string}) =>  (
  <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
  </View>
);

const HeaderComponent = () =>  (
  <View style={styles.header}>
   <Text style={styles.headertext}>Header Component</Text>
  </View>
);

function App(): React.JSX.Element {

  return (
       <VirtualizedList  
       data={DATA}
       initialNumToRender={4}
       renderItem={({item}) => <Item title={item.title}/>}
       keyExtractor={item => item.id}
       getItemCount={getItemCount}
       getItem={getItem}

       ListHeaderComponent={<HeaderComponent/>}
       />

       
  );

  
}

const styles = StyleSheet.create({
  item: {
      backgroundColor: '#97b2de',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      top: 50
  },

  title: {

    fontSize: 32,
    textAlign: 'center',
  },

  header: {
    backgroundColor: '#ccc',
    alignContent: 'center',
    padding:20,
    top: 50
  },


  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f