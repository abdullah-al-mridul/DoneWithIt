import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/Button";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={10}
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      />
      <View style={styles.innerView}>
        <View>
          <Image
            source={require("../../../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  },
  image: { width: "100%", height: "100%" },
  innerView: {
    position: "absolute",
    marginTop: StatusBar.currentHeight,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 70,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default WelcomeScreen;
