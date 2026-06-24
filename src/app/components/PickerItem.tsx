import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";

interface Props {
  label: string;
  onPress?: () => void;
  item: any;
}

const PickerItem = ({ label, item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
