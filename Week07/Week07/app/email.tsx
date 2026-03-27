import { Link, Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "../styles/AppStyles";

export default function email() {
  return (
    <>
      <Stack.Screen options={{ title: "email" }} />
      <View style={styles.container}>
        <Text>Email List Page</Text>
        <Link href="/home" push asChild>
          <Button title="Go to Home Screen" />
        </Link>
      </View>
    </>
  );
}