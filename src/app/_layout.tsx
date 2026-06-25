import { Stack, ThemeProvider } from "expo-router";
import myTheme from "./navigation/navigationTheme";

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(auth)"
          options={{
            animation: "slide_from_right",
          }}
        ></Stack.Screen>
      </Stack>
    </ThemeProvider>
  );
}
