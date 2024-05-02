import Rect, {useState,useEffect} from 'react';
import {View,TextInput,FlatList,Text,StyleSheet,ActivityIndicator} from 'react-native';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string,
    body: string;
}

const PostApp: React.FC = () => {
    const [posts,setPosts] = useState<Post[]>([]);   //posts
    const [seach,setSeach] = useState<string>('');  //search
    const [loading,setLoading] =  useState<boolean>(true); //loading

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.data)
         .then(data => {
           console.log('data: : ',data);
            setPosts(data); // Cập nhật state posts với dữ liệu fetch được
            setLoading(false); // Cập nhật state loading khi dữ liệu đã được load
         })

         .catch(error => {
            console.error('Error fetching pots: ',error);
            setLoading(false); // Cập nhật state loading ngay cả khi có lỗi
         });
    },[]);

    const renderItem = ({item}: {item: Post}) => {
        return (
            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        );
    };


    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(seach.toLocaleLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput 
              style={styles.searchInput}
              placeholder='Search posts by title ...'
              value={seach}
              onChangeText={setSeach}
            />

          {loading ? (
            <ActivityIndicator size="large" color="#00000ff"/>
          ): (
            <FlatList
              data={filteredPosts}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
     
    searchInput: {
      height: 40,
      width: 350,
      borderColor: 'gray',
      borderWidth: 2,
      marginBottom: 10,
      paddingHorizontal: 10
    },
  
    postContainer: {
      padding: 10,
      borderBottomColor: 'gray'
    },
  
    postTitle: {
      fontWeight: 'bold'
    }
  
  
  });
  
  export default PostApp;