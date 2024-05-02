import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const ThemeContext = React.createContext('light');

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <Form />
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonText}>Toggle theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

function Form(): React.JSX.Element {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

function Panel({ title, children }: PanelProps): React.JSX.Element {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <View style={[styles.panel, { backgroundColor: theme === 'dark' ? '#333' : '#fff' }]}>
      <Text style={styles.panelTitle}>{title}</Text>
      {children}
    </View>
  );
}

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps): React.JSX.Element {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme === 'dark' ? '#333' : '#fff' }]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97b2de',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#333',
  },
  panel: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
