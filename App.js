import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import immmg from "./assets/gear5.jpg";
import Task from "./components/task";
import InputField from "./components/inputField";

export default function App() {
  const [layout, setLayout] = useState({});
  const layoutHandler = (e) => {
    const { layout } = e.nativeEvent;
    setLayout(layout);
    setLayout(e.nativeEvent.layout); // same as these two lines
  };

  return (
    <View onLayout={layoutHandler} style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>
      <View style={styles.todosSec}>
        <Task text="one" />
        <Task text="two" />
        <Task text="three" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyBoard}
      >
        <InputField />
      </KeyboardAvoidingView>

      {/* <Image blurRadius={3} style={styles.imaage} source={immmg}></Image> */}
      {/* <View style={styles.blurBg} /> */}
      {/* <StatusBar style="light" backgroundColor="black" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#e8eaed",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
  },
  todosSec: {
    marginTop: 5,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
    width: "90%",
    alignSelf: "center",
  },
  keyBoard: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    width: "100%",
  },
  imaage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -10,
  },
  submitBtn: {
    borderRadius: "20px",
    paddingHorizontal: "20px",
  },
  blurBg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000",
    zIndex: -9,
    opacity: 0.7,
  },
});
