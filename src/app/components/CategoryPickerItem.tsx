import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

interface Props {
  onPress?: () => void;
  item?: any;
}

const CategoryPickerItem = ({ onPress, item }: Props) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} size={80} name={item.icon} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: "auto",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
