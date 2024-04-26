import React, { useEffect, useLayoutEffect, useRef, useMemo, useReducer } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface Post {
  userId: number;
  id: number;
  title: string,
  body: string;
}

interface State {
  posts: Post[];
  search: string;
  loading: boolean;
}

type Action =
  | { type: 'SET_POSTS'; posts: Post[] }
  | { type: 'SET_SEARCH'; search: string }
  | { type: 'SET_LOADING'; loading: boolean };

const initialState: State = {
  posts: [],
  search: '',
  loading: true,
};

// Reducer function to handle state updates based on dispatched action types
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
    case 'SET_SEARCH':
      return { ...state, search: action.search };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}

const PostApp: React.FC = () => {
  // useReducer hook to manage posts, search, and loading states centrally
  const [{ posts, search, loading }, dispatch] = useReducer(reducer, initialState);
  const searchInputRef = useRef<TextInput>(null);

  // Fetch posts from API on component mount and handle loading state
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_POSTS', posts: data });
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(error => {
        console.error('Error fetching posts: ', error);
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  }, []);

  // Automatically focus the search input after loading data
  useLayoutEffect(() => {
    if (!loading) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  // Function to render each post item
  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  // useMemo for optimizing performance by memoizing filtered posts calculation
  const filteredPosts = useMemo(() => 
    posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())),
    [posts, search]
  );

  return (
    <View style={styles.container}>
      <TextInput
        ref={searchInputRef}
        style={styles.searchInput}
        placeholder="Search posts by title ..."
        value={search}
        // Update search term in state when user types in search input
        onChangeText={(text) => dispatch({ type: 'SET_SEARCH', search: text })}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#00000ff" />
      ) : (
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
