import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Counter from "./counter";
import Profile from "./profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [displayName, setDisplayName] = useState("Anonymous");
  const [displayAge, setDisplayAge] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setDisplayName(nameInput.trim() !== "" ? nameInput : "Anonymous");
    setDisplayAge(count);
  };

  return (
    <View style={styles.container}>
      <Profile name={displayName} age={displayAge} />
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePassValue={handlePassValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        value={nameInput}
        onChangeText={setNameInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
    borderRadius: 4,
  },
});