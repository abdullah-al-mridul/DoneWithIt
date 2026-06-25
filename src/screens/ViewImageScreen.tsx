import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StatusBar, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chair.jpg")}
        style={styles.image}
      />
      <View style={styles.leftButtonView}>
        <MaterialCommunityIcons name="close" color={"white"} size={30} />
      </View>
      <View style={styles.rightButtonView}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={"white"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.black,
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
  },
  rightButtonView: {
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default ViewImageScreen;
