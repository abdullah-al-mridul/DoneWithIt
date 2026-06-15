import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color={"orange"}
        title="Press me"
        onPress={() =>
          Alert.alert("Button Pressed!", "You have pressed the button.", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
