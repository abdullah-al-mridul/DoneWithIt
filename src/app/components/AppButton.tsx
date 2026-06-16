import { StyleSheet, Text, TouchableOpacity } from "react-native";

import type { Colors } from "../config/colors";
import colors from "../config/colors";

const AppButton = ({
  title,
  onPress,
  color = "primary",
}: {
  title: string;
  onPress?: () => void;
  color?: keyof Colors;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
