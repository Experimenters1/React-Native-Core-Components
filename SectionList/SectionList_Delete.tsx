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
  SectionList,
  Touchable,
  TouchableOpacity
} from 'react-native';


const INITIAL_DATA = [
{title:"A",data:["Adam","Aron"]},
{title: "B",data:["Bella","Bob"]},
{title:"C",data: ["Cindy","Carl","Charles"]},

];

// Define types for the component props
interface ReturnItemProps {
  item: string;
  onDelete: (itemToDelete: string) => void;
}

// Define a functional component for rendering each item
const ReturnItem:  React.FC<ReturnItemProps> = ({ item , onDelete }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item}</Text>
    <TouchableOpacity onPress={() => onDelete(item) } style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Xoá</Text>
    </TouchableOpacity>
  </View>
);

interface HandleDeleteFunction {
  (itemToDelete: string): void;
}

function App(): React.JSX.Element {
  const [data,setData] = useState(INITIAL_DATA);
   
  console.log('DATA',INITIAL_DATA);
  const handleDelete: HandleDeleteFunction = itemToDelete => {
    console.log("Attempted to delete: ", itemToDelete);
    console.log('DATA1',INITIAL_DATA);
    const newData = data.map(section => { 
       const filteredData = section.data.filter(item => item !== itemToDelete);
       return {...section,data: filteredData};
    }).filter(section => section.data.length > 0);
    setData(newData)
    console.log('setData(newData) 1 : ',newData);
    console.log('setData(newData)  2 : ',setData(newData));
  }


  return (
   <SectionList
   sections={data} 
   keyExtractor={(item,index)=> item + index} 
   renderItem = {({item}) => <ReturnItem item={item} onDelete={handleDelete}/>}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  },

  deleteButton: {
    padding: 10,
    backgroundColor: '#ff6347',
  },

  deleteButtonText: {
    color: '#fff',
  }

});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f