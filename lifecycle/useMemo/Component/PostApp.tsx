import Rect, {useState,useEffect, useLayoutEffect,useRef,useMemo} from 'react';
import {View,TextInput,FlatList,Text,StyleSheet,ActivityIndicator} from 'react-native';

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
    const seachInputRef = useRef<TextInput>(null)


    //useEffect được sử dụng để fetch dữ liệu từ API khi component được mount lần đầu. 
    //Mảng dependency rỗng [] chỉ ra rằng effect này chỉ chạy một lần sau khi component được render lần đầu, 
    //tương đương với componentDidMount trong class components.

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
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
    

      // useLayoutEffect to focus the search input after loading completes.
    // This ensures that the user can immediately start typing in the search bar
    // without needing to click on it first, providing a smoother user experience.
    useLayoutEffect (() => {
      if(!loading){
         seachInputRef.current?.focus(); // Focuses the search input when data is loaded and rendering is complete
      }
    },[loading]); // Dependency array includes loading to ensure effect runs when it changes to false

    const renderItem = ({item}: {item: Post}) => {
        return (
            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        );
    };

   
    // useMemo to memoize filtered posts calculation
    const filteredPosts =  useMemo(() => {
      return posts.filter(post => 
        post.title.toLowerCase().includes(seach.toLowerCase())
      );
    },[posts,seach]);
    // const filteredPosts = posts.filter(post => 
    //     post.title.toLowerCase().includes(seach.toLocaleLowerCase())
    // );


    return (
        <View style={styles.container}>
            <TextInput 
              ref={seachInputRef}
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