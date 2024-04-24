import Rect ,{Component} from 'react';
import {StyleSheet,View, Text, ActivityIndicator } from 'react-native';

// Define an interface for the component's state
interface UsersComponentState {
    users: any[];   // Define more specific type if known
    isLoading: boolean;
    user?: any;     // Define more specific type if known, optional since it's not initially set
}

class UsersComponent extends Component<{}, UsersComponentState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched user data:', data); // Logging the fetched data
                this.setState({
                    user: data[9],
                    isLoading: false
                })
           })
            .catch(error => {
                console.error('Error fetching user data:', error);
                this.setState({ isLoading: false });
            });
    };


    render() {
        const { isLoading, user } = this.state;
        if (isLoading) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        }

        return (
            <View style={styles.container}>
                <Text>User Name: {user?.name}</Text>
                <Text>Email: {user?.email}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fcba03',
      marginTop: 100
    },
  
  
   
    
  });

export default UsersComponent;