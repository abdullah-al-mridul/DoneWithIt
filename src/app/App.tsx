import { Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love react native! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quis, nobis ullam ratione amet nisi reiciendis similique
        consectetur quidem vero! Aliquid.
      </Text>
    </View>
  );
};

export default App;
