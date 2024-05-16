/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.tsx in a new project

// In App.tsx in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}  initialParams={{ itemId: 42 }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;