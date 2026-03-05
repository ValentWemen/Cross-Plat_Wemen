import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="home" options={{ title: "home" }} />
      <Stack.Screen name="email" options={{ title: "email" }} />
      <Stack.Screen name="userList" options={{ title: "userList" }} />
      <Stack.Screen name="profile" options={{ title: "profile" }} />
    </Stack>
  );
}