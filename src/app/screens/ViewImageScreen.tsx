import { Image, StatusBar, StyleSheet, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chair.jpg")}
        style={styles.image}
      />
      <View style={styles.leftButtonView}></View>
      <View style={styles.rightButtonView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "65%",
  },
  leftButtonView: {
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    top: 20,
    left: 20,
    height: 50,
    width: 50,
    backgroundColor: "#fc5c65",
  },
  rightButtonView: {
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    top: 20,
    right: 20,
    height: 50,
    width: 50,
    backgroundColor: "#4ecdc4",
  },
});

export default ViewImageScreen;
