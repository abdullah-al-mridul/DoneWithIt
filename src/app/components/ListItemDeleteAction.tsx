import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ListItemDeleteAction = ({
  onPress,
}: {
  onPress: (message: any) => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default ListItemDeleteAction;
