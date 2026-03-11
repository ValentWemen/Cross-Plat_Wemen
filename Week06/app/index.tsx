import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const changeName = (value: string) => {
    setName(value);
  };

  const changeNim = (value: string) => {
    setNim(value);
  };

  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <CustomTextInput input={name} onChange={changeName} />
      <NIMInput input={nim} onChange={changeNim} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
});