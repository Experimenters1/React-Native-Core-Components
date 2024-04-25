import React from "react";
import {View , Text , Button , Image , ActivityIndicator ,StyleSheet,TouchableOpacity }  from 'react-native';

type Props = {
   userId: String; // Assuming userId is passed as a prop to trigger updates
};

type State = {
  userData: any; // For simplicity, type as any or define a more precise type
  loading: boolean;
};

class UserProfile extends React.Component<Props,State > {
    constructor(props: Props){
        super(props);
        this.state = { 
            userData: null,
            loading: false
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(this.props.userId !== prevProps.userId) {
            this.fetchUserData();
           
        }
    }
    

    


    fetchUserData = () => {
        this.setState({loading: true});
        fetch('https://randomuser.me/api/')
        .then(response => response.json() )
        .then(data => this.setState({userData: data.results[0],loading: false}))
        .catch(error => console.error('Error fetching data: ',error));

    };

    render(): React.ReactNode {

        const {userData, loading} = this.state;  // Correct the typo from 'loaing' to 'loading'
        
      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}  onPress={this.fetchUserData}>
                <Text style={styles.buttonText}>Click me</Text>
            </TouchableOpacity>
           {loading ? (
              <ActivityIndicator />
           ): userData && (
             <View>
                <Text>Name: {userData.name.first}  {userData.name.last}</Text>
                <Text>Email: {userData.email}</Text>
                <Image source={{uri: userData.picture.medium}} style={styles.image} />
             </View>
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


    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    button: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
      },

      buttonText: {
        fontSize: 18,
        color: 'white'
      },

})

export default UserProfile;