import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./Text";
import colors from "../config/colors";

interface Props {
  label: string;
  onPress?: () => void;
}

const CategoryPickerItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={label.toLowerCase().replace(" ", "-") as any}
          size={30}
          color={colors.white}
        />
      </View>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    width: "33%",
  },
  iconContainer: {
    backgroundColor: colors.light,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
  },
  text: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
