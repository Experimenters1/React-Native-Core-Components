import Rect ,{Component} from 'react';
import {StyleSheet,View, Text, ActivityIndicator } from 'react-native';



// Định nghĩa kiểu dữ liệu cho State và Props
interface State {
    isLoading: boolean;
    userData: UserData | null;
    error: Error | null;
}

interface Props {}

// Định nghĩa kiểu dữ liệu cho dữ liệu người dùng
interface UserData {
    id : number;
    name: string;
    email:string;
}

class UsersComponent extends Component<Props, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true,
            userData: null,
            error: null
        };
    }

    componentWillMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched user data:', data); // Logging the fetched data
                this.setState({
                    userData: data,
                    isLoading: false
                })
           })
            .catch(error => {
                console.error('Error fetching user data:', error);
                this.setState({ isLoading: false });
            });
    };


    render() {
        const { isLoading, userData,error } = this.state;
        if (isLoading) {
            return (
           <View style={styles.centered}>
            <ActivityIndicator size="large" color="#0000ff" />
           </View>
           );
        }

        if(error) {
            return (
            <View style={styles.centered}>
                <Text style={styles.errorText}> Failed to load user data: {error.message}</Text>
            </View>
             );
        }

        return (
            
            <View style={styles.centered}>
                <Text style={styles.welcomeText}>Welcome, {userData ? userData.name : 'Guest'}!</Text>
                <Text>Email: {userData ? userData.email : 'No email provided'}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fcba03',
      marginTop: 100
    },
  
    welcomeText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
   
    errorText: {
        color: 'red'
    },
    
  });

export default UsersComponent;