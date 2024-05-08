// DetailsScreen.tsx
import * as React from 'react';
import { View, Text ,Button} from 'react-native';



interface DetailsScreenProps {
  navigation: any; // You'll need to import the appropriate type for 'navigation'
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
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

export default DetailsScreen;