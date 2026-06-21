import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import defaultStyles from "../config/styles";

interface AppTextInputType extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  width?: DimensionValue;
}

const AppTextInput = ({
  icon,
  width = "100%",
  ...otherProps
}: AppTextInputType) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
