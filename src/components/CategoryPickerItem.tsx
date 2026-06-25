import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "./Text";

interface Props {
  label: string;
  onPress?: () => void;
  item: any;
}

const CategoryPickerItem = ({ label, item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={item.icon}
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
    paddingTop: 10,
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
