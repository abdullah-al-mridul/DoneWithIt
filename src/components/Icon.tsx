import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";

type MaterialIconNames = ComponentProps<typeof MaterialCommunityIcons>["name"];

interface Props {
  name: MaterialIconNames;
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Icon;
