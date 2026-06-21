import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";

interface Props {
  onPress?: () => void;
  item?: any;
}

const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
