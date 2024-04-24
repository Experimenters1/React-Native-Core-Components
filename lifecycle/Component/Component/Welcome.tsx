import React from 'react';
import  {StyleSheet,Text,View}  from 'react-native'



interface WelcomeProps {
    name: string;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>hello,{props.name}!</Text>
        
        </View>
    );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }



});

export default Welcome;