/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState,useContext,createContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button

} from 'react-native';

const ThemeContext = createContext("light");


const ThemedText = () => {
  const theme = useContext(ThemeContext);
  return <Text style={{color: theme === "light" ? "#000" : "#FFF"}}>Current Theme: {theme}</Text>
};


function App(): React.JSX.Element {
  
 const [theme,setTheme] = useState("light");

 const toggleTheme = () => {
   setTheme(theme == "light" ? "dark" : "light");
 };

  return (
    <ThemeContext.Provider value={theme}>
    <View style={styles.container}>
      <Button title='Toggle The' onPress={toggleTheme} />
      <ThemedText />

    </View>
    </ThemeContext.Provider>
  );
  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcba03'
  }
 
  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f