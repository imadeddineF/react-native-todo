import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default function InputField() {
  return (
    <View style={styles.inputFieldSec}>
      <TextInput style={styles.input} placeholder="Write a task.." />
      <TouchableOpacity style={styles.addBtn}>
        <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputFieldSec: {
    zIndex: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    // borderColor: "red",
    // borderWidth: 1,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    width: "80%",
  },
  addBtn: {
    backgroundColor: "#007bff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 58,
    height: 58,
  },
});
