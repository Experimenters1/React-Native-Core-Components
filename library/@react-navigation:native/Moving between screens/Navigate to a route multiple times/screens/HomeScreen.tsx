// HomeScreen.tsx
import * as React from 'react';
import { View, Text, Button } from 'react-native';

interface HomeScreenProps {
  navigation: any; // You'll need to import the appropriate type for 'navigation'
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;