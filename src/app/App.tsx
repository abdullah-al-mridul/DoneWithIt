import { useState } from "react";
import { Text, TextInput } from "react-native";
import Screen from "./components/Screen";

const App = () => {
  const [firstName, setFirstName] = useState<string>();

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
        maxLength={5}
        keyboardType="numeric"
        secureTextEntry
      />
    </Screen>
  );
};

export default App;
