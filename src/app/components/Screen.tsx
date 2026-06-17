import { ReactNode } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Screen = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider style={styles.container}>{children}</SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
  },
});

export default Screen;
