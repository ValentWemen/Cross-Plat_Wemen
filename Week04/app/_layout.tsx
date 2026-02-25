import { Stack } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";

// Custom theme untuk React Native Paper
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6366f1",
    secondary: "#8b5cf6",
    surface: "#ffffff",
    background: "#f0f4f8",
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack />
    </PaperProvider>
  );
}