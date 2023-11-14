import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Calculator from './Calculator';

import { Linking } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#282c34' : '#fff',
  };

  const titleStyle = {
    ...styles.title,
    color: isDarkMode ? 'white' : 'black',
  };
  // const handleOpenURL = () => {
  //   Navigation.push({
  //     componentId: 'URL',
  //     passProps: { url: 'https://www.satyamprofile.com' },
  //   });
  // };



  const footerStyle = {
    ...styles.footer,
    backgroundColor: isDarkMode ? '#282c34' : '#61dafb',
  };

  return (
    <View style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : ''} />

      <Text style={titleStyle}>CALCULATOR</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://portfolio.satyamsingh.me')}>
        <Text>By- Satyam</Text>
      </TouchableOpacity>
      <View style={styles.calc}>
        <Calculator isDarkMode={isDarkMode} />
      </View>

      <View style={footerStyle}>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.modeButton}>
          <Text style={styles.modeButtonText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  calc: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeButton: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
  },
  modeButtonText: {
    color: 'white',
  },
});