import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
