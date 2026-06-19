import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Screen stylesExtend={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo-red.png")} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        textContentType="password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
