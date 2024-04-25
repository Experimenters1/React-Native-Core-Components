import React from "react";
import {View , Text , Button , Image , ActivityIndicator ,StyleSheet,TouchableOpacity }  from 'react-native';

interface Props  {
   userId: number; 
}


interface State  {
  user: User | null;
  isLoading: boolean;
  error: Error | null
};


interface User {
   name: string;
   email: string;
   phone: string;
}


class UserProfile extends React.Component<Props,State > {
    constructor(props: Props){
        super(props);
        this.state = { 
            user: null,
            isLoading: false,
            error: null
        };
    }

    componentDidMount(): void {
      this.fetchUserData(this.props.userId)
    }
    
   componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
       if(nextProps.userId != this.props.userId){
          this.fetchUserData(nextProps.userId);
      }
   }
    


    fetchUserData = (userId: number) => {
      this.setState({ isLoading: true });
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          return response.json();
        })
        .then((data: User) => this.setState({ user: data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render(): React.ReactNode {

        const {user, isLoading,error} = this.state;  // Correct the typo from 'loaing' to 'loading'
        
        if(isLoading){
          return(
            <View style={styles.centered}>
                 <ActivityIndicator  size="large" color="#0000ff" />
            </View>
          );
        }

        if (error){
          return (
            <View style={styles.centered}>
              <Text style={styles.errorText}>Error: {error.message}</Text>
            </View>
          );
        }
        
      return (
        <View style={styles.container}>
          {user ? (
             <View>
               <Text style={styles.headerText}>{user.name}</Text>
               <Text>Email: {user.email}</Text>
               <Text>Phone: {user.phone}</Text>
             </View>

          ) : (
            <Text>No user data</Text>
          )}

        </View>
      );
    }
    

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },

    errorText: {
      color: 'red'
    },

})

export default UserProfile;