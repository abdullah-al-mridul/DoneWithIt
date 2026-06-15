import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
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
        <View>
          <View style={styles.button1View}></View>
          <View style={styles.button2View}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
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
  button1View: {
    height: 60,
    backgroundColor: "#fc5c65",
  },
  button2View: {
    height: 60,
    backgroundColor: "#4ecdc4",
  },
});

export default ViewImageScreen;
