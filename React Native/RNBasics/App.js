import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const [nameState, setNameState] = useState("ahmed");

  useEffect(() => {
    console.log('Running!');
  }, []);

  return (
    <View style={styles.cover}>
      <Text style={styles.handleText}> Welcome to {nameState} </Text>
    </View>
  );
};

// Handeling styles here...!
const styles = StyleSheet.create({
  cover: {
    backgroundColor: "yellow",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  handleText: {
    color: "red",
    fontFamily: "georgia",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;