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
} from "react-native";
import immmg from "./assets/gear5.jpg";

export default function App() {
  const [layout, setLayout] = useState({});
  const layoutHandler = (e) => {
    const { layout } = e.nativeEvent;
    setLayout(layout);
    setLayout(e.nativeEvent.layout); // same as these two lines
  };

  return (
    <View
      onLayout={layoutHandler}
      pointerEvents="none"
      style={styles.container}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 40,
          marginLeft: 20,
        }}
      >
        Today's tasks
      </Text>
      <View style={styles.inputFieldSec}>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Enter your name"
        />
        <TouchableHighlight
          style={{
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 12,
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Add</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.todosSec}>
        <View style={styles.todo}>
          <Text>hi</Text>
          <TouchableHighlight
            style={{
              backgroundColor: "red",
              borderRadius: 100,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>X</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.todo}>
          <Text>hi</Text>
          <TouchableHighlight
            style={{
              backgroundColor: "red",
              borderRadius: 100,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>X</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.todo}>
          <Text>hi</Text>
          <TouchableHighlight
            style={{
              backgroundColor: "red",
              borderRadius: 100,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>X</Text>
          </TouchableHighlight>
        </View>
      </View>

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
  },
  inputFieldSec: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 90,
    gap: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: "100%",
    width: "70%",
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
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 60,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
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
