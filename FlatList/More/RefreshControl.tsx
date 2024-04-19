/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View, FlatList, Text, StyleSheet,RefreshControl
} from 'react-native';

// Định nghĩa interface cho mỗi item trong danh sách
interface ListItem{
  id: string,
  title: string,
}

// Khởi tạo data ban đầu
const initialData: ListItem[]  = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
  {id: '4' , title: 'Four Item '}
];



function App(): React.JSX.Element {
   
  const[data,setdata] = useState<ListItem[]>(initialData)
  const [refershing,setrefershing] = useState<boolean>(false);
 

  // Hàm để xử lý sự kiện làm mới
  const onRefresh = () => {
    setrefershing(true);
    // Trong thực tế, bạn có thể cập nhật data tại đây
    setTimeout(() => {
      // Đây chỉ là ví dụ, thêm dữ liệu mới
      setdata([...data,{id:String(data.length + 1),title: `New Item ${data.length + 1}`}]);
      setrefershing(false);
    },2000
    
    );
  };


  // Sử dụng ListItem như một kiểu cho item
  const renderItem = ({item}: {item: ListItem}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>

  );

  const keyExtractor = (item: ListItem) => item.id

  return (
   <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={<Text style={styles.header}>Header</Text>}
      ListFooterComponent={<Text style={styles.footer}>Footer</Text>}
      ItemSeparatorComponent={() => <View  style={styles.separator}/>}
      refreshControl={<RefreshControl  
        refreshing= {refershing}
        onRefresh={onRefresh}
        />}
      />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },


  header: {
    fontSize: 24,
    backgroundColor: '#4d827e',
    padding: 50,
    textAlign: 'center',
  },

  footer: {
    fontSize: 24,
    backgroundColor: '#d4a526',
    padding: 20,
    textAlign: 'center',
  },

  separator: {
    height: 8,
    width: '100%',
    backgroundColor: '#6b8f32',
  },

});

export default App;



//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f