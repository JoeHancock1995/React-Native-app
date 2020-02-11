import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutput] = useState('PLUME')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="enter" onPress={() => setOutput('PLUME v.2')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
