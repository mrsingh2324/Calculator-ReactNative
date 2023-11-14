import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = ({ isDarkMode }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '<') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      ['7', '8', '9', '<'],
      ['4', '5', '6', '+'],
      ['1', '2', '3', '-'],
      ['/', '0', '*', '='],
    ];

    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((button) => (
          <TouchableOpacity
            key={button}
            style={[styles.button, { backgroundColor: isDarkMode ? '#61dafb' : '#282c34' }]}
            onPress={() => handlePress(button)}
          >
            <Text style={[styles.buttonText, { color: isDarkMode ? 'black' : 'white' }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputText, { color: isDarkMode ? 'black' : 'white' }]}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={[styles.resultText, { color: isDarkMode ? 'white' : 'black' }]}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 16,
    backgroundColor: '#61dafb',
    width: '100%',
  },
  inputText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  resultContainer: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Calculator;