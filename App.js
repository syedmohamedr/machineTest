
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './App/screens/home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{flex: 1}
});
