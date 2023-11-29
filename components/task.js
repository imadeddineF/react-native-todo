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

export default function Task({ text }) {
  return (
    <View style={styles.todo}>
      <Text>{text}</Text>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={{ color: "#fff", fontSize: 20 }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  deleteBtn: {
    backgroundColor: "red",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});
