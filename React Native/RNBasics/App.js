// import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import Layout from "./src/components/layout/layout";
import Navigation from "./src/components/navigation/navigation";

const App = () => {
  const [nameState, setNameState] = useState("ahmed");
  const [inputState, setInputState] = useState("");

  // Note: Api call handler...!
  // const apiCall = async () => {
  //   // let apiUrl = "https://jsonplaceholder.typicode.com/users";
  //   let apiUrl = "http://192.168.1.100:3001/api/fetch/cities-list";

  //   try {
  //     let response = await axios.get(apiUrl);
  //     console.log(response);
  //   }

  //   catch (error) {
  //     console.log("Err: ", error);
  //   }
  // };

  // useEffect(() => {
  //   apiCall();
  // }, []);

  // const btnHandler = () => {
  //   console.log(inputState);
  //   setInputState("");
  // };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
    // <View style={styles.cover}>
    //   <Text style={styles.handleText}> Welcome to {nameState} </Text>

    //   <TextInput
    //     placeholder="Enter something"
    //     value={inputState}
    //     onChangeText={(val) => { setInputState(val) }}
    //   />

    //   <TouchableOpacity
    //     style={styles.btn}
    //     onPress={btnHandler}
    //   >
    //     <Text style={styles.btnText}>
    //       Submit
    //     </Text>
    //   </TouchableOpacity>

    //   <ActivityIndicator color={'red'} size="large" />
    // </View>
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
  },

  btn: {
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 1,
    width: "70%",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;