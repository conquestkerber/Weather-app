import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
