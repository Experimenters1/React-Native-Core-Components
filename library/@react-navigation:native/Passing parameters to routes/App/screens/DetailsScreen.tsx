// DetailsScreen.tsx
import * as React from 'react';
import { View, Text ,Button,StyleSheet} from 'react-native';



interface DetailsScreenProps {
  navigation: any; // You'll need to import the appropriate type for 'navigation'
  route: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route ,navigation }) => {
  /* 2. Get the param */
  const {itemId,otherParam} = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details',{
          itemId: Math.floor(Math.random() * 100),
        })}
      />
       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
       <Button title="Go back" onPress={() => navigation.goBack()} />
       <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default DetailsScreen;