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
    </View>
  );
};

export default DetailsScreen;