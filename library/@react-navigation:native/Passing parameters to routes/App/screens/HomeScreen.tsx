// HomeScreen.tsx
import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

interface HomeScreenProps {
  navigation: any; // You'll need to import the appropriate type for 'navigation'
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style ={ styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 56,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
};

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center'
    }
});


export default HomeScreen;