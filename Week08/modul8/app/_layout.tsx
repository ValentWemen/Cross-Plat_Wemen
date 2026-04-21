import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4F46E5",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "800",
        },
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="postDetail" options={{ title: "Post Detail" }} />
      <Stack.Screen name="addPost" options={{ title: "Add New Post" }} />
    </Stack>
  );
}
