/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';


const DATA = [{title:"A",data:["Adam","Aron"]},
{title: "B",data:["Bella","Bob"]},
{title:"C",data: ["Cindy","Carl","Charles"]},];

// Define a functional component for rendering each item
const ReturnItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item}</Text>
  </View>
);

function App(): React.JSX.Element {

  return (
   <SectionList
   sections={DATA} 
   keyExtractor={(item,index)=> item + index} 
   renderItem = {({item}) => <ReturnItem item={item}/>}
   renderSectionHeader={({ section: {title}}) => (
    <Text style={styles.header}>{title}</Text>
  )}
   style={styles.container}
   />
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
      marginTop:100,
      paddingHorizontal: 10,
      backgroundColor: '#97b2de',
  },

  item: {
    padding: 20,
    // height: 144,
    marginVertical: 8,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 14
  },

  header: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#613210',
  }

});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f