import { Image, StyleSheet, TouchableNativeFeedback, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          console.log("image tapped");
        }}
      >
        <View
          style={{
            width: 200,
            height: 300,
            backgroundColor: "red",
          }}
        >
          <Image
            source={{
              height: 200,
              width: 300,
              uri: "https://picsum.photos/200/300.jpg",
            }}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
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
