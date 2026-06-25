import { ReactNode } from "react";
import { Platform, StatusBar, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Screen = ({
  children,
  stylesExtend,
}: {
  children?: ReactNode;
  stylesExtend?: ViewStyle;
}) => {
  return (
    <SafeAreaProvider style={[styles.container, stylesExtend]}>
      {children}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "auto",
  },
});

export default Screen;
