import { Button, Text, View } from "react-native";

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({
  handleIncrement,
  handleDecrement,
  handlePassValue,
  value,
}: iCounter) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{value}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title="Pass Value" onPress={handlePassValue} />
    </View>
  );
};

export default Counter;