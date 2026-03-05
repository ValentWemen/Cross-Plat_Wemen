import { Link, Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "../styles/AppStyles";

export default function home() {
  return (
    <>
      <Stack.Screen options={{ title: "home" }} />
      <View style={styles.homeContainer}>
        <Text style={styles.homeTitle}>Navigation List</Text>

        <Link href="/email" push asChild>
          <Button title="Go to Email Screen" />
        </Link>

        <Link href="/userList" push asChild>
          <Button title="Go to User List Page" />
        </Link>
      </View>
    </>
  );
}