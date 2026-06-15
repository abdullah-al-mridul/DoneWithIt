import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
