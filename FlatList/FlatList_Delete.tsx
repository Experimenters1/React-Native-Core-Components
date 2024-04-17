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
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

  // Định nghĩa interface cho mục dữ liệu của danh sách
interface ListItem {
  id: number;
  text: string;
}
 
 const initialItems: ListItem[] = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5' },
  { id: 6, text: 'Item 6' },
  { id: 7, text: 'Item 7' },
];


function App(): React.JSX.Element {

  const [items, setItems] = useState<ListItem[]>(initialItems);

  const deleteItem = (id: number) => {
      setItems(preItems => preItems.filter(item=>item.id != id));
  };

  const handleDelete = (id: number) => {
       Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteItem(id), style: 'destructive' },
      ]);
  };

  return (
    <View style={styles.container}>
       <FlatList 
       data={items}  
       keyExtractor={(item) => item.id.toString()} 
       renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text style={styles.text}>{item.text}</Text>
          <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>

        </View>
       )}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
      //  justifyContent: 'center', // Căn giữa theo chiều dọc
      //  alignContent: 'center', // Căn giữa theo chiều ngang
       backgroundColor: '#960e0e', 
       paddingTop: '60%'
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  text: {
    fontSize: 20,
  },

  deleteButton: {
    backgroundColor: '#9c5325',
    padding: 10,
  },

  deleteButtonText: {
    color: '#fff'
  }



});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f