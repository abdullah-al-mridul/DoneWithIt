import { Slot, ThemeProvider } from "expo-router";
import myTheme from "./navigation/navigationTheme";

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Slot />;
    </ThemeProvider>
  );
}
